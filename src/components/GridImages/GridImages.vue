<template>
    <h1 class="title-grid">Venha renovar seu brilho</h1>
    <v-card
      class="mx-auto c-grid"
    >
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card>
              <v-img
                :src="card.src"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="400px"
                cover
              >
                <v-card-title class="text-white" v-text="card.title"></v-card-title>
              </v-img>
  
              <v-card-actions>
                <v-spacer></v-spacer>
  
                <v-btn
                  color="red"
                  icon="mdi-heart"
                  size="small"
                ></v-btn>
  
                <v-btn
                  color="pink"
                  icon="mdi-bookmark"
                  size="small"
                ></v-btn>
  
                <v-btn
                  color="blue"
                  icon="mdi-share-variant"
                  size="small"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </template>
  <script>
    export default {
      data: () => ({
        cards: [
          { title: 'Avenida princesa Isabel n° 1716', src: 'https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/refs/heads/main/local01.jpeg', flex: 12 },
          { title: 'Dentro da Loja Paty Decoração', src: 'https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/refs/heads/main/local02.jpeg', flex: 6 },
          { title: 'Segunda a Sábado', src: 'https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/refs/heads/main/WhatsApp%20Image%202024-10-31%20at%2000.12.07.jpeg', flex: 6 },
        ],
      }),
    }
  </script>

<style scoped>
.title-grid{
    padding: 10px;
    text-align: center;
}

.c-grid{
    margin: 10px 0;
    padding: 10px;
}

</style>