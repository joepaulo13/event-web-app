import { useState } from "react"
import ApiClient from "../ApiClient";
import generatedQR from "./generatedQR";
import Loading from "../CommonComponents/loading";
import Error from "../CommonComponents/error";

export default function UserRegistration() {

    const [registrationForm, setRegistrationForm] = useState({});
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    function handleInputTextChange(fieldName,value) {
        setRegistrationForm({
            ...registrationForm,
            [fieldName]: value
        })
    }

    function register(e) {
        if(e) {
            e.preventDefault();
        }
        setIsLoading(true)
        ApiClient().post('/addUser', registrationForm).then(response => {
            
            setIsLoading(false)
            setIsError(false)
            setIsSuccess(true)
        }).catch(error =>{
            setIsLoading(false)
            setIsSuccess(false)
            setIsError(true)
            console.error(error)
        })
    }

    function registrationPage() {
        return <>
            <form onSubmit={register}>
                <div className="col-sm-12 text-center my-3"> <h3>User Registration</h3> </div>

                <div className="col-sm-12">
                    <div className="mb-3 row">
                    <div className="col-sm-2">Employee ID </div>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="employeeId" value={registrationForm?.employeeId ? registrationForm.employeeId : ''} onChange={(e)=> handleInputTextChange(e.target.name,e.target.value)} required/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <div className="col-sm-2">Name </div>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="employeeName" value={registrationForm?.employeeName ? registrationForm.employeeName : ''} onChange={(e)=> handleInputTextChange(e.target.name,e.target.value)} required/>
                        </div>
                    </div>
                    
                    <div className="mb-3 row">
                        <div className="col-sm-2">Email </div>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" name="email" value={registrationForm?.email ? registrationForm.email : ''} onChange={(e)=> handleInputTextChange(e.target.name,e.target.value)} required/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <div className="col-sm-2">Deparment </div>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="department" value={registrationForm?.department ? registrationForm.department : ''} onChange={(e)=> handleInputTextChange(e.target.name,e.target.value)} required/>
                        </div>
                    </div>
                </div>

                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary" type="submit">Register</button>
                </div>
            </form>
        </>
    }

    function renderContent() {
        if(isSuccess && !isLoading) {
            return generatedQR()
        } else if(isError && !isLoading) {
            return Error()
        } else if(isLoading) {
            return Loading()
        } else {
            return registrationPage()
        }
    }

    return (
        <>
            { renderContent() }
        </>
    )
}