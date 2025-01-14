import React from 'react';

const Greeting: React.FC = () => {
    const today = new Date();
    const dayOfWeek = today.toLocaleDateString('en-US', { weekday: 'long' });

    let greeting = '';

    switch (dayOfWeek) {
        case 'Monday':
            greeting = 'Happy Monday! The week is full of possibilities!';
            break;
        case 'Tuesday':
            greeting = 'Is it Tuesday? Taco Tuesday! Two-Piece Tuesday!';
            break;
        case 'Wednesday':
            greeting = 'Happy Hump Day! You\'re halfway there!';
            break;
        case 'Thursday':
            greeting = 'Happy Thursday! Don\'t get <em>too</em> thirsty...';
            break;
        case 'Friday':
            greeting = 'Happy Friday! Cheers to the freakin\' weekend.';
            break;
        case 'Saturday':
            greeting = 'Happy Saturday! College football is over so...movies?';
            break;
        case 'Sunday':
            greeting = 'Happy Sunday! I\'m off today! See you tomorrow!';
            break;
        default:
            greeting = 'Hello!';
            break;
    }
    // if it's a holiday, we'll greet them with a holiday greeting
    const month = today.toLocaleDateString('en-US', { month: 'long' }); // 'January
    const date = today.getDate();

    month === 'January' && date === 1 && (greeting = 'Happy New Year!');
    month === 'February' && date === 1 && (greeting = 'Happy Black History Month!');
    month === 'February' && date === 14 && (greeting = 'Happy Valentine\'s Day!');
    month === 'March' && date === 8 && (greeting = 'Happy International Women\'s Day!');
    month === 'March' && date === 17 && (greeting = 'Happy St. Patrick\'s Day!');
    month === 'April' && date === 1 && (greeting = 'Happy Autism Awareness Month!');
    month === 'May' && date === 1 && (greeting = 'Happy Asian American and Pacific Islander Heritage Month!');
    month === 'May' && date === 4 && (greeting = 'May the Fourth be with you!');
    month === 'May' && date === 5 && (greeting = 'Happy Cinco de Mayo!');
    month === 'June' && date === 1 && (greeting = 'Happy Pride Month!');
    month === 'June' && date === 19 && (greeting = 'Happy Juneteenth! It\'s our founder\'s birthday today, too!');
    month === 'June' && date === 28 && (greeting = 'Today, let\'s remember that Pride was a riot! Happy Stonewall Day!');
    month === 'July' && date === 4 && (greeting = 'Happy Independence Day!');
    month === 'August' && date === 1 && (greeting = 'Happy Black Business Month! Support your local black-owned businesses!');
    month === 'September' && date === 1 && (greeting = 'Happy Hispanic Heritage Month!');
    month === 'October' && date === 1 && (greeting = 'Happy LGBTQIA+ History Month!');
    month === 'October' && date === 31 && (greeting = 'Happy Halloween!');
    month === 'November' && date === 1 && (greeting = 'Happy Native American Heritage Month!');
    month === 'November' && date === 11 && (greeting = 'We honor the veterans who lost their lives protecting our freedoms.')
    month === 'November' && date === 26 && (greeting = 'Happy Thanksgiving!');
    month === 'December' && (greeting = 'Happy Holidays, no matter what you celebrate!');

    return <h1 className='text-center'>{greeting}</h1>;
};

export default Greeting;
