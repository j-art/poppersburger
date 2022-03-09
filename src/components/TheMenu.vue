<script setup>
import WelcomeItem from './WelcomeItem.vue'
import IconMiamiViceBurger from './icons/IconMiamiViceBurger.vue'
import IconSinaloaBurger from './icons/IconSinaloaBurger.vue'
import IconCheeseBurger from './icons/IconCheeseBurger.vue'
import IconBaconDosisBurger from './icons/IconBaconDosisBurger.vue'
import IconItalianBurger from './icons/IconItalianBurger.vue'
import IconDrinks from './icons/IconDrinks.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <IconCheeseBurger />
    </template>
    <template #heading>Cheese Burger</template>
    <template #price>14.9k</template>
    <b>Ingredientes:</b> pan brioche - lechuga - tomate y cebolla - queso cheddar fundido - carne de res - pepinillos - salsa leña.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <IconBaconDosisBurger />
    </template>
    <template #heading>Bacon Dosis</template>
    <template #price>16.5k</template>
    <b>Ingredientes:</b>: pan brioche - lechuga - tomate y cebolla - queso cheddar fundido - carne de res - pepinillos - tocineta - salsa leña - BBQ.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <IconMiamiViceBurger />
    </template>
    <template #heading>Miami Vice Burger</template>
    <template #price>19.5k</template>
    <b>Ingredientes:</b> pan artesanal - mezclum - piña asada - queso philadelphia - carne res - cebolla crocante - tocineta bañada en BBQ honey.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <IconSinaloaBurger />
    </template>
    <template #heading>Sinaloa Burger</template>
    <template #price>17.5k</template>
    <b>Ingredientes:</b> pan artesanal - lechuga - pico de gallo - carne de res - queso cheddar fundido - jalapeños - sour cream - frijo refrito - guacamole. 
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <IconItalianBurger />
    </template>
    <template #heading>Italian Burger</template>
    <template #price>17.5k</template>
    <b>Ingredientes:</b> pan artesanal - lechuga - tomates asados - carne res - queso mozarella - peperoni - salsa napolitana - mayonesa de pesto.
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <IconDrinks />
    </template>
    <template #heading>Bebidas</template>
    <template #price>2.5 a 4k</template>
    Cerveza Budweiser - Cerveza Club Colombia Dorada - Cerveza Aguila - Cerveza Sol - Coca Cola - Coca Cola Zero. 
  </WelcomeItem>
</template>

<style>
b{
  font-weight: bold;
}
.item{
  font-family: 'Architects Daughter', cursive;
}
.item img{
  width: 100%;
  padding: 5px;
}
    
    </style>