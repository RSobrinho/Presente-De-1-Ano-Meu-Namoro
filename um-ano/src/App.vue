<template>
  <div id="app">
    <header class="header">
      <img src="./assets/logoHeart.png" alt="logoHeart" />
      <nav>
        <button class="header__btndropdown" @click="alert1">
          Nossos Meses :D
          <img src="./assets/iconDown.png" alt="iconDown" />
        </button>
        <button class="header__btnlogin" @click="alert2">Log In</button>
      </nav>
    </header>
    <main>
      <section class="intro">
        <h1 class="intro__title">
          Amor da minha vida, essa simples página é só uma homenagem para
          demonstrar tudo o que já vivemos em somente 1 ano, mas ainda por cima
          mostrar tudo o que
          <span>
            ainda podemos conquistar juntos, porque com a ajuda um do outro tudo
            que desejamos vai se tornar possível, te amo.</span
          >
        </h1>
      </section>
      <section class="subintro">
        <img src="./assets/img1.png" alt="img1" />
        <p class="subintro__title">
          Coloquei essa foto, sinceramente porque ficou boa neste estilo da
          página, eu literamente estou escrevendo isso dia 16 de agosto, na
          pressa pra te fazer uma surpresa, então espero que goste meu amor. E
          essa foto foi uma de muitas que ainda vou colocar de wallpaper do
          celular :D
        </p>
      </section>
      <section class="transition">
        <h2>Então Vamos Lá</h2>
        <img src="./assets/smile.png" alt="smile" />
      </section>
      <section class="beforeaugust">
        <div class="titlebar">
          <h3>Antes de agosto... quando tudo começou</h3>
        </div>
        <div class="beforeaugust__content">
          <div class="beforeaugust__left">
            <img src="./assets/img2.1.png" alt="imgLeft" />
          </div>
          <div class="beforeaugust__right">
            <img src="./assets/img2.2.png" alt="imgRight" />
            <p>
              Bom, aqui é aquela euforia, aquela paixão, que aos poucos vai se
              tornando amor de verdade. Quando eu te stalkeei vi suas fotos no
              insta, eu imediatamente apaixonei e senti que essa poderia ser a
              oportunidade de encontrar a pessoa certa para mim, que me entenda,
              que saiba conversar das mesmas coisas que eu, que saiba
              simplemente me amar de uma forma que eu me sentisse completo todos
              os dias. E simplesmente foi a maior oportunidade que eu não deixei
              passar na minha vida.
            </p>
          </div>
        </div>
      </section>
      <section class="august">
        <div>
          <h3>Agosto, quando aquele pedido foi feito...</h3>
        </div>
        <div class="august__upcontent">
          <img src="./assets/img3.1.png" alt="imgUp" />
        </div>
        <div class="august__downcontent">
          <p>
            Nessa foto a direita, foi o parque que eu te pedi em namoro, foi o
            dia que daí em diante eu entendi o que era ter alguem por perto,
            alguem que te considera, que te quer junto de você, que te ama.
          </p>
          <img src="./assets/img3.2.png" alt="imgDown" />
          <p>
            Por incrível que pareça, eu me sentia confiante no dia, pois
            simplesmente parecia (e éra) a escolha mais certa a ser tomada. E
            aquele vídeo brega não me impediu de dizer aquelas palavras.
          </p>
        </div>
      </section>
      <section class="september">
        <div class="titlebar pink">
          <h3>Setembro, o primeiro de muitos meses</h3>
        </div>
        <div class="september__upcontent">
          <img src="./assets/img4.png" alt="imgUp" />
          <video controls>
            <source src="./assets/vid1.mp4" type="video/mp4" />
            Your browser dows not support the video tag
          </video>
        </div>
        <div class="september__downcontent">
          <p>
            Aqui começou a nossa vida de namorados, onde tudo parecia estar
            dando errado, mas um tentava acalmar o outro pra ninguém surtar se
            adequando as novas atividades, como responder o zapzap a cada 10
            minutos ao invés de 2 horas, e problemas fora do relacionamento, mas
            que afetavam a gente indiretamente. Nessa foto, foi a festa lá na
            minha tia, aonde você conheceu a minha familia inteira (pelo que eu
            me lembre), e todos te adoraram de cara, e decidiram te “agregar” na
            familia kkkkk.
          </p>
        </div>
      </section>
      <section class="october">
        <div>
          <h3>Outubro, só 2 meseszinhos, mal imaginávamos</h3>
        </div>
        <div class="upContent__october">
          <img src="./assets/img5.1.png" alt="upImages" />
          <img src="./assets/img5.2.png" alt="upImages" />
        </div>
        <div class="centerContent__october">
          <p>
            Daí em diante, a coisa foi só crescendo, nós fomos nos
            desenvolvendo, saindo, nos ajudando nos nossos problemas
            (psicológicos principalmente) mas nunca deixando de querer a outra
            pessoa por perto a todo momento. Nosso “primeiro encontro de casais
            sem querer”, o que foi engraçado, e sua formatura, aonde aquela
            maquiagem não combinou mas você continuava linda e maravilhosa do
            mesmo jeito.
          </p>
        </div>
        <div class="downContent__october">
          <img src="./assets/img5.3.png" alt="upImages" />
          <img src="./assets/img5.4.png" alt="upImages" />
        </div>
      </section>
      <section class="november">
        <div class="titlebar">
          <h3>Novembro, e com isso nosso amor aumentava + e +</h3>
        </div>
        <img src="./assets/img6.png" alt="imgs" />
      </section>
      <section class="december">
        <div>
          <h3>Dezembro, essas bubbles tavam boas né? kkkk</h3>
        </div>
        <div class="december__downcontent">
          <img src="./assets/img7.png" alt="imgs" />
        </div>
      </section>
      <january-comp />
      <section class="fevMarAprMay">
        <div class="titlebar pink">
          <h3>Fevereiro, março, abril, maio: Pouca foto é foda kkkk</h3>
        </div>
        <div>
          <img src="./assets/img8.png" alt="imgs" />
        </div>
        <div>
          <p>
            Simplesmente, nosso amor já tinha se consolidado, nós estávamos nos
            conhecendo cada vez mais, e a vontade de permanecer com você, de
            conversar com você, de lembrar de você, aumentava cada vez e cada
            vez mais. Eu não entendia, e pra falar a verdade ainda não entendo,
            mas tenho certeza que sou mais feliz do que era antes de te
            conhecer. Cada momento, cada ida no cinema, me fazia ainda mais
            feliz, mesmo nos momentos tristes, que machucam, que ferem e que
            marcam negativamente, você e eu sempre permanecemos juntos.
          </p>
        </div>
      </section>
      <section class="june">
        <div>
          <h3>Junho, nossa viagem pra pira :0</h3>
        </div>
        <div class="june__content">
          <div class="june__leftcontent">
            <img src="./assets/img9.1.png" alt="img" />
            <p>
              Pra falar bem a verdade, eu preferi a última viagem, mas eu adorei
              essa também já que você estáva junto :D. Foi nessa viagem que eu
              entendi que no futuro, nós que vamos estar indo para estes
              lugares, junto de amigos, familia, ou somente nós 2, mas com nossa
              independência conquistada, e muitos outros sonhos para serem
              alcançados. Juntos, sempre vamos empurrar o outro para frente,
              para o crescimento mútuo, com consistência e clareza dos
              objetivos, sendo eles individuais mas que podem ser impulsionados
              com alguém ao seu lado, como também nossos objetivos juntos como
              um casal.
            </p>
          </div>
          <div class="june__rightcontent">
            <img src="./assets/img9.2.png" alt="img" />
          </div>
        </div>
      </section>
      <section class="july">
        <div class="titlebar">
          <h3>Julho, separados porém só na distância calma amor</h3>
        </div>
        <div>
          <p>
            Nessa viagem de júlho, eu queria muito você lá, mas não dá para ter
            tudo que deseja não é mesmo kkkkkkkk. Apesar disso, permanecemos em
            contato e foi como se nunca tivessemos saído de perto um do outro.
            Eu me tornando bruxo e “Wine Drinker” (botei em inglês pra ficar
            chique) e você se tornando mais linda a cada dia (como que é
            possível isso meu Deus).
          </p>
        </div>
        <div>
          <img src="./assets/img10.png" alt="imgs" />
        </div>
      </section>
      <section class="heartmaster">
        <h3>
          Passou um ano inteiro, e nesse meio nós crescemos, melhoramos, nos
          adaptamos, um com a ajuda do outro, mas parece que passou 5 minutos
          igual essa página da web kkkkkk, porém ainda temos muitas experiências
          para contruir juntos, e nesse caminho nos tornar felizes, um com o
          outro.
        </h3>
      </section>
      <section class="ourfuture">
        <div>
          <h2 class="ourfuture__title">Em breve, juntos</h2>
        </div>
        <div>
          <img src="./assets/img12.png" alt="imgs" />
        </div>
        <div>
          <button class="ourfuture__btn" @click="click = !click">
            <h2>NÃO CLIQUE!</h2>
          </button>
        </div>
        <div class="ourfuture__gifofo" v-show="click == true">
          <img
            src="https://i.pinimg.com/originals/85/f2/53/85f2535cfdcfeaa0e815bb24c2fb13e0.gif"
            alt="gifofo"
          />
        </div>
      </section>
    </main>
    <footer>
      <h2>Todos os direitos reservados a nós</h2>
      <img src="./assets/logoHeart.png" alt="logoHeart" />
    </footer>
  </div>
</template>

<script>
import JanuaryComp from './components/januaryComp.vue'

export default {
  name: 'App',
  components: {
    JanuaryComp
  },
  data() {
    return {
      click: false
    }
  },
  methods: {
    alert1() {
      window.alert(
        'Resumindo, isso era para abrir todos os meses, e vc poderia escolher qual iria ver, mas deu canseira e n quis terminar n ;-;'
      )
    },
    alert2() {
      window.alert(
        'Esse botao aqui eu criaria tipo um login, pra onde tipo, nos 2 poderiamos acessar, e sla o que teria nesse site p gnt, mas foi uma ideia na hora assim'
      )
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

@mixin flex {
  display: flex;
  justify-content: center; // justify-content: flex-start
  flex-direction: column; // flex-direction: row
  align-items: center; // align-items: stretch
}

@mixin button {
  height: 6rem;
  border-style: none;
  border-radius: var(--border1);
  font-size: 2.8rem;
  line-height: 2.4rem;
}

:root {
  --size1: 120rem;
  --size2: 100rem;
  --size3: 80rem;
  --font1: 4.5rem;
  --font2: 2.8rem;
  --ln-height: 2.4rem;
  --color1: #10202b;
  --color2: #ebf2f8;
  --color3: #d90f0f;
  --color4: #4a687c;
  --color5: #fc4444;
  --color6: #ff9f9f;
  --padding1: 0rem 4rem 6rem 4rem;
  --border1: 1.5rem;
  --border2: 2rem;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  @include flex;
  justify-content: flex-start;

  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;

  width: 100vw;
  height: 100vh;

  background-image: url('./assets/heart.png'),
    radial-gradient(
      circle,
      rgba(255, 216, 216, 1) 0%,
      rgba(255, 237, 239, 1) 50%,
      rgba(255, 233, 255, 1) 100%
    );
  background-repeat: repeat-y, repeat;
  background-position: center 0rem, 0px, 0px;
}

h1 {
  width: var(--size2);
  color: var(--color1);
  font-size: var(--font1);

  line-height: 4rem;
  font-weight: 600;
  text-align: center;
}

h3 {
  font-size: var(--font1);
  color: var(--color2);
}

p {
  font-size: var(--font2);
  color: var(--color1);
}

span {
  color: var(--color3);
}

img {
  border-radius: var(--border1);
}

video {
  width: 30rem;
  height: 60rem;
}

main {
  @include flex;
  row-gap: 20rem;
}

section {
  @include flex;
  border-radius: var(--border2);
  width: var(--size1);

  row-gap: 10rem;
  text-align: center;
}

button {
  box-shadow: 0px 0px 30px rgba(132, 132, 132, 0.2);

  &:hover {
    transition: 0.2s;
  }
}

#app {
  @include flex;
  align-items: stretch;
  justify-content: flex-start;

  width: var(--size1);

  z-index: 10;
  row-gap: 15rem;
}

.header {
  @include flex;
  justify-content: space-between;
  flex-direction: row;

  &__btndropdown {
    @include button;

    background: var(--color1);
    color: var(--color2);

    width: 30rem;
    margin-right: 5rem;

    &:hover {
      background-color: #1d2b35;
    }
    &:focus {
      transition: 0.1s;
      background-color: #072a41;
    }
  }

  &__btndropdown img {
    margin-left: 1rem;
  }

  &__btnlogin {
    @include button;

    background: var(--color5);
    color: var(--color1);

    width: 20rem;

    &:hover {
      background-color: #f35555;
    }
    &:active {
      transition: 0.1s;
      background-color: #f13a3a;
    }
  }
}

.subintro {
  flex-direction: row;

  width: var(--size1);

  &__title {
    font-size: var(--font2);
    line-height: var(--ln-height);
    color: var(--color1);

    width: 31rem;
    margin-left: 4rem;
  }
}

.transition {
  flex-direction: row;
  justify-content: space-around;

  background: var(--color5);
  line-height: var(--ln-height);
  color: var(--color2);
  width: var(--size2);

  font-size: 6rem;

  &:hover {
    transition: 0.2s;
    background: var(--color3);
  }
}

.beforeaugust {
  &__content {
    @include flex;
    flex-direction: row;
    justify-content: space-between;

    column-gap: 10rem;
  }

  &__right {
    max-width: 60rem;
  }

  &__right p {
    margin-top: 2rem;
  }
}

.titlebar {
  @include flex;
  flex-direction: row;

  border-radius: var(--border1);
  width: var(--size1);
  background-color: var(--color1);

  &:hover {
    background-color: var(--color3);
    transition: 200ms;
  }
}

.pink {
  background: var(--color3);

  &:hover {
    background-color: var(--color1);
    transition: 200ms;
  }
}

.august {
  background-color: var(--color6);
  padding: var(--padding1);

  h3 {
    color: var(--color1);
  }

  &__downcontent {
    @include flex;
    flex-direction: row;
    justify-content: space-between;
  }
}

.september {
  &__upcontent video {
    margin-left: 20rem;
  }

  p {
    width: var(--size2);
  }
}

.october {
  background-color: var(--color4);
  padding: var(--padding1);

  div {
    @include flex;
    flex-direction: row;
    column-gap: 10rem;
  }

  p {
    color: var(--color2);
  }
}

.december {
  background-color: var(--color4);

  &__downcontent {
    padding: var(--padding1);
  }
}

.fevMarAprMay {
  p {
    width: var(--size2);
  }
}

.june {
  background: var(--color6);
  padding: var(--padding1);

  &__content {
    @include flex;
    justify-content: flex-start;
    flex-direction: row;
    column-gap: 5rem;
  }

  h3 {
    color: var(--color1);
  }

  p {
    margin-top: 20rem;
  }
}

.july {
  p {
    width: var(--size2);
  }
}

.heartmaster {
  @include flex;

  background-image: url('./assets/img11.png');
  background-repeat: no-repeat;
  background-position: center;
  width: 160rem;
  height: 140rem;

  h3 {
    font-size: 3.5rem;
    line-height: 4rem;
    color: var(--color2);
    width: 60rem;
    margin-bottom: 5rem;
  }
}

.ourfuture {
  row-gap: 15rem;

  &__title {
    color: var(--color3);

    font-size: 15rem;
  }
  &__btn {
    background: var(--color3);

    width: 52rem;
    height: 15rem;
    border-style: none;
    border-radius: 3rem;

    &:hover {
      background: #df2d2d;
    }

    &:active {
      transition: 1ms;
      background: #ee0808;
    }
  }

  &__btn h2 {
    color: var(--color2);

    font-size: 5rem;
  }

  &__gifofo img {
    height: 90vh;
  }
}

footer {
  @include flex;
  flex-direction: row;
  justify-content: space-around;

  background: var(--color5);

  h2 {
    color: var(--color2);
    font-size: var(--font2);
  }
}
</style>
