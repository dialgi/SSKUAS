import { useNavigate } from "react-router-dom";
import Button from "../elements/button";
import LabeledInput from "../elements/LabeledInput";

const FormSignUp = () => {
  const link = useNavigate()

  const handlesubmit = (e) =>{
    e.preventDefault()
    link('/balance')
  }
  return (
    <form action="" onSubmit={handlesubmit}>
      <div className="mb-6">
        <LabeledInput
          label="Name"
          type="text"
          placeholder="John Doe"
          name="name"
        />
      </div>
      <div className="mb-6">
        <LabeledInput
          label="Email Address"
          type="email"
          placeholder="hello@example.com"
          name="email"
        />
      </div>
      <div className="mb-6">
        <LabeledInput
          label="Password"
          type="password"
          placeholder="*************"
          name="password"
        />
      </div>
      <Button variant="bg-[#299D91] w-full text-white" type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default FormSignUp;
