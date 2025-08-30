import { SignInFlow } from "../types"

interface SignUpCardProps {
    setState: (state: SignInFlow) => void;
};

export const SignUpCard = ({ setState }: SignUpCardProps) => {
    return (
        <div onClick={() => {setState("signIn")}} className="cursor-pointer">
            Sign Up Card
        </div>
    )
}