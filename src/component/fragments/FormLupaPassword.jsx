import LabeledInput from "../elements/LabeledInput";
import Button from "../elements/button";

const FormLupaPassword = () => {
  return (
    <form action="">
      <div className="mb-6">
        <LabeledInput
          label="Email Address"
          type="email"
          placeholder="hello@example.com"
          name="email"
        />
      </div>
   
      <Button variant="bg-[#299D91] w-full text-white" type="submit">
        Lupa Password
      </Button>
    </form>
  );
};

export default FormLupaPassword;
