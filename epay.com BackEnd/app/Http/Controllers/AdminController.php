<?php

namespace App\Http\Controllers;
use App\Models\Admin;
use App\Models\CustomerBalance; 
use App\Models\CustomerReview;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{

    private $status_code    =        200;

    public function index()
    {
        
        $data = Admin::all();
        return $data;
    }

    public function customeradd(Request $request)
    {
        
        $data = new Admin();
        $data->first_name    =   $request->first_name;
        $data->last_name    =   $request->last_name;
        $data->full_name    =   $request->full_name;
        $data->email        =   $request->email;
        $data->phone        =   $request->phone;
        $data->password     =   $request->password;
        $data->type        =   $request->type;
        $data->save();
    }

    public function show($id)
    {
        
        $data = Admin::find($id);
        return $data;
    }
    public function allshow()
    {
        
        $data = Admin::all();
        return $data;
    }

    public function cbalance()
    {
        
        $data = CustomerBalance::all();
        return $data;
    }
    public function rshow()
    {
        
        $data = CustomerReview::all();
        return $data;
    }
    public function edit($id)
    {
        
        $data = Admin::find($id);
        return $data;
    }

    public function destroy($id)
    {
        
        $data = Admin::find($id);
        $data->delete();
    }
    public function cdestroy($id)
    {
        
        $data = CustomerBalance::find($id);
        $data->delete();
    }
    public function rdestroy($id)
    {
        
        $data = CustomerReview::find($id);
        $data->delete();
    }
    

    public function update(Request $request, $id)
    {
        
        $data = Admin::find($id);
        $data->first_name    =   $request->first_name;
        $data->last_name    =   $request->last_name;
        $data->email        =   $request->email;
        $data->phone        =   $request->phone;
        $data->save();
    }

    public function userSignUp(Request $request) {
        $validator              =        Validator::make($request->all(), [
            "name"              =>          "required",
            "email"             =>          "required|email",
            "password"          =>          "required",
            "phone"             =>          "required",
            "type"             =>          "required"
        ]);

        if($validator->fails()) {
            return response()->json(["status" => "failed", "message" => "validation_error", "errors" => $validator->errors()]);
        }

        $name                   =       $request->name;
        $name                   =       explode(" ", $name);
        $first_name             =       $name[0];
        $last_name              =       "";

        if(isset($name[1])) {
            $last_name          =       $name[1];
        }

        $userDataArray          =       array(
            "first_name"         =>          $first_name,
            "last_name"          =>          $last_name,
            "full_name"          =>          $request->name,
            "email"              =>          $request->email,
            "password"           =>          md5($request->password),
            "phone"              =>          $request->phone,
            "type"              =>          $request->type
        );

        $user_status            =           Admin::where("email", $request->email)->first();

        if(!is_null($user_status)) {
           return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! email already registered"]);
        }

        $user                   =           Admin::create($userDataArray);

        if(!is_null($user)) {
            return response()->json(["status" => $this->status_code, "success" => true, "message" => "Registration completed successfully", "data" => $user]);
        }

        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "failed to register"]);
        }
    }


    // ------------ [ Admin Login ] -------------------
    public function userLogin(Request $request) {

        $validator          =       Validator::make($request->all(),
            [
                "email"             =>          "required|email",
                "password"          =>          "required"
            ]
        );

        if($validator->fails()) {
            return response()->json(["status" => "failed", "validation_error" => $validator->errors()]);
        }


        // check if entered email exists in db
        $email_status       =       Admin::where("email", $request->email)->first();


        // if email exists then we will check password for the same email

        if(!is_null($email_status)) {
            $password_status    =   Admin::where("email", $request->email)->where("password", md5($request->password))->first();

            // if password is correct
           
                $user           =       $this->userDetail($request->email);

                return response()->json(["status" => $this->status_code, "success" => true, "message" => "You have logged in successfully", "data" => $user]);
            

        }

        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Email doesn't exist."]);
        }
    }

    // ------------------ [ Admin Detail ] ---------------------
    public function userDetail($email) {
        $user               =       array();
        if($email != "") {
            $user           =       Admin::where("email", $email)->first();
            return $user;
        }
    }
}
