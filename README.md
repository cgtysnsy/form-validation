Form Validation
Create a Form Component in React that renders out a list of input fields and validates them before finally submitting the form to the server. Create the form from scratch WITHOUT using any third-party libraries like Formik or react-hook-forms.

User Stories and Tasks
Create a <Form /> component that renders out a form.
The form will have 5 input fields and labels, that are
1. First Name
2. Last Name
3. Email Address
4. Password
5. Confirm Password
After the user clicks on the Register button, the form should be submitted using the onSubmit attribute on the HTML form.
If a form field doesn't follow the validations, an error should be displayed right below the form field.
If the form fields is being changed and it already has an error in it, the error should be removed and the user should resubmit the form again. In simple words, implement On Blur functionality.
If the form has no errors, A green success message should display at the bottom of the page.
Every form element should have a placeholder associated with it.
Form Validation Checks
None of the form fields should be EMPTY.
First Name should be atleast 3 characters long.
Last Name should be atleast 3 characters long.
Email should follow a regex text to be verified. Refer this link to get the regex
Password and Confirm Password should match exactly.
All the form fields should be required by default.


https://www.algochurn.com/frontend/form-validation