<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CustomerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
            'password' => 'required|min:2|max:8',
            'myfile' => 'required|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ];
    }

    public function messages()
    {
        return [
            //
            'password.required' => "Password can't be empty...",
            'password.min' => "Password must be minimum 2 characters...",
            'password.max' => "Password can't exceed 8 characters...",

            'myfile.required' => "Profile Picture must be uploaded...",
            'myfile.mimes' => "Profile Picture should be in jpeg, png, jpg, gif, svg format...",
            'myfile.max' => "The size of Profile Picture must be lower than 2048 kb...",
        ];
    }
}
