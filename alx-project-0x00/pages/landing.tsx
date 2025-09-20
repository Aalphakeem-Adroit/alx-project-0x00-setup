import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <Card />
            
            <Button styles="px-2 py-1" sizes="small" shapes="rounded-sm" title="Learn More" />
            <Button styles="px-4 py-2" sizes="medium" shapes="rounded-md" title="Learn More" />
            <Button styles="px-6 py-3" sizes="large" shapes="rounded-full" title="Learn More" />
        </div>

    )
}

export default Landing;