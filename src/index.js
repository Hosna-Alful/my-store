import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    return <h1>Hello, Webpack with React!</h1>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
import './styles.css'; // قم بإنشاء ملف styles.css في المجلد نفسه
import myImage from './my-image.jpg'; // قم بإنشاء صورة اختبارية بنفس الاسم

const img = document.createElement('img');
img.src = myImage;
document.body.appendChild(img);

console.log('Styles and images loaded!');
