<template>
    <nav class="navbar py-0 navbar-expand-lg navbar-light bg-light">
        <div>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">

                    <li v-for="(item, index) in menu" :key="index" class="nav-item dropdown mx-2">
                        <a class="nav-link dropdown-toggle ms_dropdown_icon a_clr" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {{item.link}}
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import ListItem from '@/data/ListItem.js'

export default {
    name: 'SlideProva',

    data(){
        return{
           menu: ListItem,
        }
    }

}
</script>

<style lang="scss">

    // formattazione frecce dropdown
    .ms_dropdown_icon::after{
        width: 0.4em;
        height: 0.4em;
        border-right: 0.15em solid #a0a5a5 !important;
        border-top: 0.15em solid #a0a5a5 !important;
        border-left: 0 !important;
        transform: rotate(135deg);
        vertical-align: middle;
        
    }

    .a_clr{
        color: #a0a5a5 !important;
        font-size: 13px;
    }
            

    // formattazione al passaggio sopra gli elementi
    li:hover a{
        color: #427ed1 !important;
    }

           
   

</style>