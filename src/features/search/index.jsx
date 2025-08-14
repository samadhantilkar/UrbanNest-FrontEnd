import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import LocationInput from "./location-input";
import DateSelectInput from "./date-select-input";
import OccupancyInput from "./occupancy-input";
import { Button } from "@/components/ui/button";

function Search(){

    const form=useForm({
        defaultValues:{
            city:" "
        }
    });

    function onSubmit(data){
        console.log("Search Data",data)
    }

    return (
        
        <section className="container">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-1 p-1 bg-yellow-500
                lg:flex-row lg:items-center rounded h-14 ">
                    <LocationInput form={form}/>
                    <DateSelectInput form={form}/>
                    <OccupancyInput form={form}/>
                    <Button type="submit" className="text-lg h-full">
                        Search
                    </Button>
                </form>
            </Form>
        </section>
    )
}
export default Search;