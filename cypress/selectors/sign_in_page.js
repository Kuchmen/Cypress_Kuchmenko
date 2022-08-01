export const sign_in_page = {
  logo_image: '.makeStyles-logo-3',
  title_text: '.MuiTypography-h5',
  username_field:'#username',
  password_field:'#password',
  username_placeholder:'#username-label',
  password_placeholder:'#password-label',
  username_error_required: '#username-helper-text',
  password_error_required: '#password-helper-text',
  remember_me_checkbox: 'input[name="remember"]',
  sign_in_button: 'button[type="submit"]',
  sign_up_link: 'a[data-test="signup"]',
  sypress_logo: 'a[target="_blank"]',
  logout_button: '[data-test="sidenav-signout"]',

  get_selector_for_date(date){
    return `date today ${date}`
  }
}