import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <Card />
            
            <Button sizes="small" shapes="rounded-sm" title="Learn More" />
            <Button sizes="medium" shapes="rounded-md" title="Learn More" />
            <Button sizes="large" shapes="rounded-full" title="Learn More" />
        </div>

    )
}

export default Landing;