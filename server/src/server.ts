import app from './app';
import './database/connection';

app.listen(3333, () => {
    console.log('🚀 Server started at 3333');
})