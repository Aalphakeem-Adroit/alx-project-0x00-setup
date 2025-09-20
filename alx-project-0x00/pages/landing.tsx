import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <Card />
            
            <Button styles="small" title="Learn More" />
        </div>

    )
}

export default Landing;