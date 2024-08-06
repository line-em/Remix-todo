import {Form} from "@remix-run/react";

const AddRoute = () => {
    return (
        <div>
            <h2 className="font-bold text-xl text-sky-700">Add a new task</h2>
            <Form
                className="mt-4 shadow p-4 bg-white rounded leading-7 max-w-[80ch] md:mx-auto">
                <input type="text"/>
            </Form>
        </div>
    );
};

export default AddRoute;
