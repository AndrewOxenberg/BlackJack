
import './styles/components/login.css';
import './styles/components/table.css';
import './styles/styles.css';


console.log('Hello World!');

document.querySelector('.hamburger_button').addEventListener('click', function() {
    document.querySelector('.navbar_container').classList.toggle('active');
});