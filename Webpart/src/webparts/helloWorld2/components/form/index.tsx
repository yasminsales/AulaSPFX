import * as React from 'react';
import { SubmitHandler, useForm } from "react-hook-form";

import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { setVirtualParent } from '@fluentui/dom-utilities';

type Inputs = {
    FirstName: string,
    LastName: string,
    Title: string,
    Description: string,
};

export default function Form(props) {

    const { register, handleSubmit, watch, errors } = useForm<Inputs>();

    console.log(watch());

    const onSubmit = data => {
        sp.web.lists.getByTitle('Colaboradores').items.add(data).then(res => {
            console.log("Item adicionado à lista");
            console.log(res);
        }).catch(err => {
            console.log(err);
        });

        console.log("Dados:" + data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="exampleInputFirstName1" className="form-label">First name</label>
                <input ref={register({ required: true, maxLength: 20 })} name="First name" type="name" className="form-control" id="exampleInputFirstName1"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputLastName1" className="form-label">Last name</label>
                <input ref={register({ required: true, maxLength: 50 })} name="First name" type="name" className="form-control" id="exampleInputLastName1"></input>
            </div>
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