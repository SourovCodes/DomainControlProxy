<?php

namespace App\Filament\Resources\Domains\Schemas;

use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class DomainForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Domain Information')
                    ->components([
                        Select::make('user_id')
                            ->label('Owner')
                            ->relationship('owner', 'name')
                            ->searchable()
                            ->required(),
                        TextInput::make('domain_name')
                            ->label('Domain Name')
                            ->required()
                            ->unique(ignoreRecord: true)
                            ->maxLength(255),
                        Grid::make(2)
                            ->components([
                                DatePicker::make('registration_date')
                                    ->label('Registration Date')
                                    ->required()
                                    ->native(false),
                                DatePicker::make('next_due_date')
                                    ->label('Next Due Date')
                                    ->required()
                                    ->native(false),
                            ]),
                        TextInput::make('recurring_amount')
                            ->label('Recurring Amount')
                            ->required()
                            ->numeric()
                            ->prefix('$')
                            ->step('0.01'),
                        TextInput::make('epp_code')
                            ->label('EPP Code')
                            ->required()
                            ->maxLength(255),
                    ]),
                Section::make('Nameservers')
                    ->collapsible()
                    ->components([
                        TextInput::make('nameserver_1')
                            ->label('Nameserver 1')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('nameserver_2')
                            ->label('Nameserver 2')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('nameserver_3')
                            ->label('Nameserver 3')
                            ->maxLength(255),
                        TextInput::make('nameserver_4')
                            ->label('Nameserver 4')
                            ->maxLength(255),
                    ]),
            ]);
    }
}
