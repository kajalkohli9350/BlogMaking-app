import { FaGithub, FaGoogle } from "react-icons/fa";
import Button from "../common/Button";

const Socialauth = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Button
        type="submit"
        label="continue with Github"
        outlined
        icon={FaGithub}
        onClick={() => {}}
      />
      <Button
        type="submit"

        label="continue with Google"
        outlined
        icon={FaGoogle}
        onClick={() => {}}
      />
    </div>
  );
};

export default Socialauth;
