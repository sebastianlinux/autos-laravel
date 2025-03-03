<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('carros', function (Blueprint $table) {
            $table->id(); // Campo 'id' autoincrementado (BIGINT UNSIGNED)
            $table->string('marca');
            $table->string('modelo');
            $table->integer('año');
            $table->string('color');
            $table->decimal('precio', 10, 2);
            $table->string('photo_url')->nullable(); // Añade esta línea
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carros');
    }
};