<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Domain>
 */
class DomainFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $registrationDate = fake()->dateTimeBetween('-2 years', 'now');

        return [
            'user_id' => User::factory(),
            'domain_name' => fake()->unique()->domainName(),
            'registration_date' => $registrationDate,
            'next_due_date' => fake()->dateTimeBetween($registrationDate, '+1 year'),
            'recurring_amount' => fake()->randomFloat(2, 10, 100),
            'nameserver_1' => 'ns1.'.fake()->domainName(),
            'nameserver_2' => 'ns2.'.fake()->domainName(),
            'nameserver_3' => fake()->boolean(50) ? 'ns3.'.fake()->domainName() : null,
            'nameserver_4' => fake()->boolean(30) ? 'ns4.'.fake()->domainName() : null,
            'epp_code' => fake()->regexify('[A-Z0-9]{12}'),
        ];
    }
}
