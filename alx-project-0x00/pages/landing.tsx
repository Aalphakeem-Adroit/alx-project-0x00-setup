import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <Card />
            
            <Button styles="px-2 py-1" sizes="small" shapes="rounded-sm" title="Small Button" />
            <Button styles="px-4 py-2" sizes="medium" shapes="rounded-md" title="Medium Button" />
            <Button styles="px-6 py-3" sizes="medium" shapes="rounded-lg" title="Large Button" />
            <Button styles="px-8 py-4" sizes="large" shapes="rounded-full" title="Full Button" />
        </div>

    )
}

export default Landing;