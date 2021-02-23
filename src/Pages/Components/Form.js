import React from 'react';

import FormWrapper from '../../Components/Components/Form/FormWrapper';
import FormField from '../../Components/Components/Form/FormField';
import FormButton from '../../Components/Components/Form/FormButton';

import '../../Styles/Components.scss';

const Form = () => {
    return (
            <FormWrapper title="Form Template">
                <FormField label="Username" placeholder="Enter Username Here" />
                <FormField label="Full Name" placeholder="Enter Full Name Here" />
                <FormButton text="Submit" />
            </FormWrapper>
    )
}

export default Form;