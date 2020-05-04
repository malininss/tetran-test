$('.phone-operator').css('visibility', 'hidden');
$('.phone-number').css('font-size', '10px');
$('.text').css({'border':'1px solid pink'});
$('.text__numbers').css('color','green');

const phoneNumber = $('.phone-number');
const textPhoneNumber = parseInt(phoneNumber.text().replace(/\D+/g,"")).toString();
const newFormanPhoneNumber = `+${textPhoneNumber.substr(0, 1)} (${textPhoneNumber.substr(1, 3)}) ${textPhoneNumber.substr(4, 2)}-${textPhoneNumber.substr(6, 2)}-${textPhoneNumber.substr(8, 3)}`;

phoneNumber.text(newFormanPhoneNumber);