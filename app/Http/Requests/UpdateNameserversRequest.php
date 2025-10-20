<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateNameserversRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nameserver_1' => ['required', 'string', 'max:255'],
            'nameserver_2' => ['required', 'string', 'max:255'],
            'nameserver_3' => ['nullable', 'string', 'max:255'],
            'nameserver_4' => ['nullable', 'string', 'max:255'],
        ];
    }

    /**
     * Get custom error messages for validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'nameserver_1.required' => 'Nameserver 1 is required.',
            'nameserver_1.max' => 'Nameserver 1 must not exceed 255 characters.',
            'nameserver_2.required' => 'Nameserver 2 is required.',
            'nameserver_2.max' => 'Nameserver 2 must not exceed 255 characters.',
            'nameserver_3.max' => 'Nameserver 3 must not exceed 255 characters.',
            'nameserver_4.max' => 'Nameserver 4 must not exceed 255 characters.',
        ];
    }
}
