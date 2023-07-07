# Midleware

- Phần mềm trung gian, đứng giữa các thành phần trong phần mềm

# Code

const tickets = ['1', '2', '3'];

# Example

app.get("pathname", function(req, res, next){
<!-- conditions -->
if(tickets.includes(req.query.id)){
next();
}
}, function(req, res, next){

});

# Work

-> Nếu mà trong query gửi đi có id match với điều kiện thì mới gội hàm next
