//Its used to breack function and throw the error msg
console.log("NeverType:=>")
function ApiError(msg,code):never{
throw {message:msg,ApiCode:code}
}
console.log(ApiError("Server Side Error",500))