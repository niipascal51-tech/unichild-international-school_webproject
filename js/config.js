// Change API after deployment
const API = 'http://localhost:5000/api';
const CLASSES = ['Creche','Nursery','Kindergarten',...[1,2,3,4,5,6].map(n=>'Primary '+n),...[1,2,3].map(n=>'JHS '+n)];
const TERMS = ['First Term','Second Term','Third Term'];
const SESSION = '2025/2026';
const app = document.getElementById('app');