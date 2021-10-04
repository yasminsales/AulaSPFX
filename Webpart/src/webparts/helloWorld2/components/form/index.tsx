import * as React from 'react';
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    Title: string,
    Description: string,
};

export default function Form() {

    const { register, handleSubmit, watch, errors } = useForm<Inputs>();

    console.log(watch());

    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input ref={register} name="Title" type="text" className="form-control" id="exampleInputEmail1" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input ref={register({ required: true })} name="Description" type="password" className="form-control" id="exampleInputPassword1"></input>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                <label className="form-check-label">Check me out</label>
            </div>
            {errors.Description && <span>This field is required</span>}
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}