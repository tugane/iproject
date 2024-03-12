import React from 'react';
const inputClass = 'px-3 py-2 bg-white text-gray-600 text-base mt-2 appearance-none border border-gray-400 w-full rounded'
const labelClass = 'text-base font-normal text-gray-700 capitalize'

const ServiceForm = () => {
    return (
        <div className={'bg-white rounded-lg p-3 shadow-black/50 shadow-2xl'}>
            <div className={'border-2 border-blue-500 rounded-lg pb-3'}>
                <div className={'bg-blue-200 w-full border-b border-blue-500 px-3 py-2 rounded-t-lg'}>
                    <h1 className={'text-blue-600 font-semibold text-lg'}>
                        Business Owner Details
                    </h1>
                </div>
                <div className={' p-3'}>
                    <h1 className={'text-black font-bold text-lg'}>
                        Business Owner Details
                    </h1>
                </div>
                <div className={'grid grid-cols-1 md:grid-cols-2'} >
                    <div className={'col-span-1 px-3 py-2'}>
                        <label className={labelClass}>
                            Applicant
                            citizenship
                        </label>
                        <select
                            name={'applicantCitizenship'}
                            className={inputClass}>
                            <option value={''}>
                                Select citizenship
                            </option>
                            <option value={'Rwandan'}>
                                Rwandan
                            </option>
                            <option value={'Foreigner'}>
                                Foreigner
                            </option>
                        </select>
                    </div>
                    <div className={'col-span-1 px-3 py-2'}>
                        <label className={labelClass}>
                            Identification
                            document
                            number
                        </label>
                        <input
                            type={"text"}
                            name={"idNumber"}
                            placeholder={"Id number"}
                            className={inputClass}/>
                    </div>
                    <div className={'col-span-1 px-3 py-2'}>
                        <label className={labelClass}>
                            Passport
                            number
                        </label>
                        <input
                            type={"text"}
                            name={"passportNumber"}
                            placeholder={"Passport number"}
                            className={inputClass}/>
                    </div>
                    <div className={'col-span-1 px-3 py-2'}>
                        <label className={labelClass}>
                            Surname
                        </label>
                        <input
                            type={"text"}
                            name={"surname"}
                            placeholder={"Surname"}
                            className={inputClass}/>
                    </div>
                    <div className={'col-span-1 px-3 py-2'}>
                        <label className={labelClass}>
                            Other names
                        </label>
                        <input
                            type={"text"}
                            name={"otherNames"}
                            placeholder={"Other Names"}
                            className={inputClass}/>
                    </div>
                    <div className={'col-span-1 px-3 py-2'}>
                        <label className={labelClass}>
                            Nationality
                        </label>
                        <input
                            type={"text"}
                            name={"nationality"}
                            placeholder={"Nationality"}
                            className={inputClass}/>
                    </div>
                    <div className={'col-span-1 px-3 py-2'}>
                        <label className={labelClass}>
                            Phone Number
                        </label>
                        <input
                            type={"text"}
                            name={"phoneNumber"}
                            placeholder={"PhoneNumber"}
                            className={inputClass}/>
                    </div>
                    <div className={'col-span-1 px-3 py-2'}>
                        <label className={labelClass}>
                            Email
                        </label>
                        <input
                            type={"email"}
                            name={"email"}
                            placeholder={"Email"}
                            className={inputClass}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceForm;