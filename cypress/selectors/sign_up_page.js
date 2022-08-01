export const sign_up_page = {
    firstname_field: '#firstName',
    lastname_field: '#lastName',
    username_field:'#username',
    password_field:'#password',
    confirm_password_field: '#confirmPassword',
    sign_up_button: 'button[data-test="signup-submit"]',
    next_button: 'button[data-test="user-onboarding-next"]',

    get_selector_for_date(date){
        return `date today ${date}`
    }
}