<template>
    <ul class="py-1 text-lg font-bold space-y-1 lg:py-7">
        <li class="flex items-center space-x-1">
            <div class="w-14 text-gris">
                <AreaIcon />
            </div>

            <div class="text-dorado">
                <p class="leading-tight">{{ casa.area }} m2 total</p>

                <p class="text-base font-light leading-tight">
                    {{ casa.construido }} m2 construidos
                </p>
            </div>
        </li>

        <li class="flex items-center space-x-1">
            <div class="w-14 text-gris">
                <DormitoriosIcon />
            </div>

            <p class="text-dorado">{{ casa.dormitorios }} dormitorios</p>
        </li>

        <li class="flex items-center space-x-1">
            <div class="w-14 text-gris">
                <TinaIcon />
            </div>

            <p class="text-dorado">{{ casa.baños }} baños</p>
        </li>

        <li v-if="casa.estacionamiento" class="flex items-center space-x-1">
            <div class="w-14 text-gris">
                <CocheraIcon />
            </div>

            <p class="text-dorado">estacionamiento</p>
        </li>
    </ul>
</template>

<script>
import CocheraIcon from '../../svg/CocheraIcon.vue';
import TinaIcon from '../../svg/TinaIcon.vue';
import DormitoriosIcon from '../../svg/DormitoriosIcon.vue';
import AreaIcon from '../../svg/AreaIcon.vue';

export default {
    name: 'InfoCasa',
    components: {
        AreaIcon,
        DormitoriosIcon,
        TinaIcon,
        CocheraIcon,
    },
    props: ['casa'],
};
</script>
