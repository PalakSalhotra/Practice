import { useState } from "react";
import COLOR from "../../config/color";
import "./styles.css";
import { FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import CustomInput from "../../Components/CustomInput";

function LoginPage() {
  // let count = 0;
  // const [count, setCount] = useState(0);
  const[email,setEmail]=useState("@gmail.com");
  return (
    <div className="loginPageBaseContainer">
      <div className="loginPageContentBaseContainer">
        <div className="loginPageContentTitleContainer">
          <h1>Quiz Exam</h1>
          <h4>Login</h4>
        </div>
        <div className="loginPageContentInputContainer">
          <CustomInput
            type={"email"}
            placeholder={"Enter Email"}
            Icon={FaUserAlt}
            inputValue={email}
            onChangeText={(e)=>{
            
              setEmail(e.target.value);

            }
          }
          />
          <CustomInput
            type="password"
            placeholder={"Enter Password"}
            Icon={FaKey}
            isSecureEntry={true}
          />
          {/* <p>{count}</p>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Increment
          </button> */}
        </div>
        <div className="loginPageContentButtonContainer"></div>
        <div className="loginPageContentRegisterContainer"></div>
      </div>
    </div>
  );
}

export default LoginPage;