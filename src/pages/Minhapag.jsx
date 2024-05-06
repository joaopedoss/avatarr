import avatar from  "../assets/avatar.jpg"
import Header from "../Components/Header"

export default function Minhapag() {
  return (
    <div>
     <Header />
    <img src={avatar} alt="" className="w-96 ms-auto me-auto" />
    <section className="">
      <p className="text-left px-6 font-bold">Antes de assistir a continuação de “Avatar”, fiz meu trabalho de casa. Revi o filme anterior, ressignifiquei opiniões passadas e escolhi a melhor sala de exibição, uma DBOX RealD 3D, porque se qualquer obra fica melhor no cinema, imagine essa. “Avatar 2: O Caminho da Água” é acima de tudo uma imersiva aventura visual. O filme foi pensado assim, visto que a característica marcante de seu diretor James Cameron é criar uma atmosfera sensorial que convida à entrada no mundo fantasioso de Pandora. Se o primeiro foi uma apresentação de um nova avançada tecnologia ao mundo dos efeitos especiais dos avatares, este pode ser considerado a obra-prima. Seus técnicos, em uma equipe gigantesca, vide os créditos, conseguiram imprimir uma consistente, crível, subjetiva, muita próxima e possível realidade. O 4K é tão real que chega a incomodar fisicamente a própria percepção do que se assiste, soando inclusive muitas das vezes irreal como se o público estivesse em um realista jogo de computador, acompanhado de tanta ação. Nós, audiência, chegamos a esquecer que o que vemos é um filme. Essa sensação dá um bug em nossa cabeça e quase consequentemente nos desligamos. Sim, é quase um estudo cognitivo das reações humanas. Talvez a experiência do DBOX tenha me ajudado nessa confusão, porque minha cadeira não parou um minuto – fui jogado e estimulado do primeiro ao último minuto de duração do longa-metragem de mais de três horas. </p>
    </section>
    <p className="text-center font-bold text-2xl"><a href="https://www.adorocinema.com/filmes/filme-178014/" className="text-blue-600/100  underline mb-12">Ver mais</a></p>
  </div>
  )
}
