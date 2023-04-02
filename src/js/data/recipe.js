function Recipe(uid, recipeName, category, description, ingredients, completionTime, image) {
    this.uid = uid;
    this.recipeName = recipeName;
    this.category = category;
    this.description = description;
    this.ingredients = ingredients;
    this.completionTime = completionTime;
    this.image = image;
}


export const recipes = [
    new Recipe(
        58055,
        "Pumpkin Pie",
        "Dessert",
        `<p>
        Gravida laoreet imperdiet vulputate laoreet tristique sem nunc iaculis semper pharetra taciti. Duis dapibus augue ipsum et litora platea suscipit sagittis fames, ligula laoreet. Tempor malesuada eu non mi dolor est proin ante sociosqu. Ultricies phasellus iaculis porttitor. Lobortis dolor eu facilisi eros cum pharetra dolor tellus litora ullamcorper rhoncus hendrerit. Primis metus integer consectetur semper auctor! Integer ultrices.
        </p>`,
        `<ul>
        <li>
        Condimentum sed elementum fermentum himenaeos sit dignissim interdum sollicitudin morbi.
        </li>
        <li>
        Volutpat ipsum, potenti metus conubia arcu fringilla aenean praesent dictum.
        </li>
        <li>
        Bibendum metus gravida eros lacinia tellus ultricies pretium pulvinar sociis.
        </li>
        <li>
        Auctor pulvinar ultrices amet facilisis in pellentesque enim, dolor auctor.
        </li>
        <li>
        Sapien ad etiam sodales et lectus vel potenti sit iaculis.
        </li>
        </ul>`,
        65,
        "/src/images/pumpkinpie.jpg"
    ),
    new Recipe(
        22833,
        "Tiramisu",
        "Dessert",
        `<p>
        Diam class condimentum tellus quisque etiam morbi porttitor volutpat elit fringilla. Metus, vestibulum convallis magna tellus diam. Habitasse nec non risus ligula potenti sociis dui lectus ornare. Pretium mauris mus integer magnis vitae cum id consequat. Donec tempus maecenas suscipit nec nec consequat nunc libero amet cursus aptent? Laoreet iaculis dapibus tellus sodales lacinia potenti nibh. Vestibulum inceptos nulla ante consectetur sodales ut fermentum nec semper. Nec inceptos aliquet commodo nibh natoque nibh taciti. Ullamcorper fringilla nisl elementum orci facilisi vel viverra. Pellentesque sagittis arcu phasellus condimentum auctor. Massa mollis, augue eget. Lorem maecenas vehicula.
        </p>`,
        `<ul>
        <li>
        Nibh varius eleifend, duis sodales placerat velit et conubia a.
        </li>
        <li>
        Per condimentum nibh nisi vestibulum molestie eu, ultrices vulputate velit.
        </li>
        <li>
        Placerat luctus dapibus conubia vestibulum fusce ipsum potenti sit ultricies.
        </li>
        <li>
        Est metus convallis, dis hac ridiculus varius massa dui fusce.
        </li>
        <li>
        Aenean phasellus sem sollicitudin quisque, cras nulla ad suspendisse bibendum.
        </li>
        <li>
        Mattis aenean neque a mollis justo curabitur cum ultricies nec.
        </li>
        <li>
        Urna donec massa litora malesuada praesent in odio mauris ac.
        </li>
        </ul>
        `,
        45,
        "/src/images/tiramisu.jpg"
    ),
    new Recipe(
        40204,
        "Chocolate Chip Cookies",
        "Dessert",
        `<p>
        Bibendum et natoque senectus vivamus erat. Inceptos netus vestibulum potenti cursus arcu vestibulum diam. Ornare in posuere cursus augue ante nostra lacinia. Nullam dapibus malesuada nascetur curae; dui inceptos inceptos? Himenaeos vitae diam ligula ad consequat feugiat nostra accumsan? Rutrum class nam vulputate nulla odio per nulla dignissim ipsum tempor. Volutpat vivamus eu diam auctor dapibus justo! Hendrerit ultricies elementum duis aliquet accumsan himenaeos scelerisque habitasse. Platea tempor praesent quis euismod malesuada. Primis eget integer tellus. Eros etiam vestibulum suspendisse dis arcu dictumst vivamus inceptos pellentesque ligula hendrerit! Maecenas duis elementum ultrices parturient quisque euismod auctor? Ridiculus.
        </p>
        <p>
        Penatibus molestie natoque tincidunt nec. Feugiat blandit senectus tempus commodo tristique? Ultrices volutpat platea integer rhoncus penatibus phasellus habitant. Vivamus quam facilisi pellentesque viverra sociosqu iaculis lorem litora lobortis ultricies nulla etiam. Sodales ad lacus nibh natoque ridiculus massa habitant ultricies. Cubilia et nostra vivamus augue dis hac netus magna leo. Montes nibh nisl adipiscing justo ante nascetur neque dis massa magna ornare vivamus! Lobortis mi cras nec mattis sociosqu, egestas suspendisse. Suscipit dui curae; suscipit eleifend egestas luctus eu per.
        </p>
        <p>
        Amet quis porta malesuada. Dictumst habitant pretium dictumst phasellus mus. Euismod arcu sem proin enim himenaeos porttitor ipsum dolor porttitor eu. Scelerisque cubilia ligula aptent morbi vehicula porta scelerisque fusce. Ut, nisl vivamus sit nullam at eros torquent gravida ut. Id lacinia dapibus phasellus scelerisque etiam suspendisse ipsum dignissim dictumst. Odio eros adipiscing luctus augue turpis rutrum venenatis laoreet cursus arcu purus lobortis! Et eleifend sollicitudin inceptos mollis massa cubilia eleifend auctor mus varius pellentesque. Inceptos semper torquent porta vitae, est fusce natoque conubia vestibulum. Pretium nullam eleifend vehicula ullamcorper ultricies cum sodales penatibus.
        </p>`,
        `<ul>
        <li>
        Venenatis cras malesuada vel curabitur fusce nisl ultrices ultrices fames.
        </li>
        <li>
        Porta nisi dui potenti sagittis elit conubia mi vulputate vivamus.
        </li>
        <li>
        Nunc sollicitudin volutpat, ante curabitur ad scelerisque diam tempus arcu.
        </li>
        <li>
        Cursus ullamcorper adipiscing duis ligula tempor fermentum quisque quis aliquam.
        </li>
        <li>
        Fusce convallis vehicula hac mollis est potenti netus maecenas laoreet.
        </li>
        </ul>`,
        30,
        "/src/images/cookie.jpg"
    ),
    new Recipe(
        33351,
        "Lemon Curd",
        "Dessert",
        `<p>
        Accumsan ut et torquent class fringilla pretium volutpat molestie. Nisi non eleifend taciti urna ultricies nibh semper enim magnis. Facilisi malesuada himenaeos ultricies porta! Nascetur feugiat ornare conubia praesent interdum cubilia adipiscing ultrices rhoncus. Dis quam aliquet ipsum, consequat sed sed mattis lobortis. Pellentesque duis hac natoque curabitur ac enim sagittis. Lorem gravida potenti vestibulum vestibulum quisque sapien dapibus. Ipsum tempor aenean euismod sodales aliquam montes! Tristique feugiat ipsum cursus eros. Scelerisque primis, potenti placerat eleifend hendrerit. Consectetur senectus ornare parturient praesent congue urna ultrices, volutpat.
        </p>`,
        `<ul>
        <li>
        Mauris gravida litora cum feugiat venenatis libero eget himenaeos lectus.
        </li>
        <li>
        Ad vitae dui auctor himenaeos purus phasellus vivamus ullamcorper malesuada.
        </li>
        <li>
        Sit enim est luctus cursus et lorem bibendum elementum feugiat!
        </li>
        <li>
        Cubilia ultricies habitasse ullamcorper, sapien mus a ante gravida sollicitudin.
        </li>
        <li>
        Per feugiat ad, auctor dignissim integer at sem tempus eu.
        </li>
        <li>
        Quam diam vivamus penatibus cursus pretium neque proin felis malesuada.
        </li>
        </ul>`,
        75,
        "/src/images/lemoncurd.jpg"
    ),
    new Recipe(
        71572,
        "Chocolate Lava Cake",
        "Dessert",
        `<p>
        Risus lacinia commodo ac. Magna rhoncus nostra urna orci lacinia senectus. Elit iaculis vel natoque eleifend nisi dignissim interdum per. Augue dui orci fusce metus ullamcorper mauris. Inceptos neque sem tellus, dictumst ridiculus ut. Est cursus aliquam etiam ad per varius parturient fermentum fames hendrerit gravida. Quis dictumst magnis dis sodales integer nascetur dapibus mi phasellus. Lacus, cursus inceptos a sociis consequat bibendum. Primis suspendisse sapien augue vivamus hac amet fringilla. Eleifend, ut habitant dapibus torquent per litora porta! Sodales, at enim viverra turpis taciti suspendisse venenatis bibendum potenti purus arcu libero. Erat habitasse mattis vehicula ante venenatis velit.
        </p>`,
        `<ul>
        <li>
        Ullamcorper conubia duis vehicula nulla eleifend magnis convallis dolor venenatis.
        </li>
        <li>
        Ad orci lorem eleifend dictumst euismod ligula condimentum mollis fringilla.
        </li>
        <li>
        Integer auctor tortor faucibus netus, vulputate conubia nunc iaculis neque.
        </li>
        <li>
        Pulvinar id parturient porta massa posuere, sociosqu aliquam dictumst sagittis.
        </li>
        <li>
        Amet tempus cursus pharetra arcu quisque mattis nec imperdiet netus.
        </li>
        <li>
        Mauris lorem felis hendrerit tempor ac purus etiam lorem risus.
        </li>
        <li>
        Venenatis et donec sed praesent morbi penatibus viverra donec velit.
        </li>
        <li>
        Dictum id eu semper potenti feugiat dis himenaeos ante augue.
        </li>
        </ul>`,
        30,
        "/src/images/chocolatelava.jpg"
    ),
    new Recipe(
        19078,
        "Garlic Baked Chicken",
        "Entrée",
        `<p>
        Sodales at auctor sollicitudin bibendum volutpat est, per diam congue augue. Varius elementum porta sapien placerat, ut dictumst nec erat convallis. Dui sed magnis tincidunt sagittis pharetra id. Malesuada cursus habitasse nibh velit lacinia enim interdum dignissim habitant. Blandit aenean eros sapien sociis quis, ligula praesent adipiscing praesent ipsum habitasse? Ultricies tristique, penatibus malesuada curabitur senectus. Potenti, condimentum placerat congue interdum malesuada blandit. Mus purus adipiscing rhoncus dolor netus ligula! Viverra elit aliquam rutrum tellus et magna nibh volutpat convallis porttitor quis mi.
        </p>
        <p>
        Potenti viverra ad ac mus aptent vestibulum pharetra dui interdum tristique. Egestas posuere gravida maecenas vehicula porta. Sollicitudin vitae cubilia primis. Fusce natoque ultrices risus condimentum. Ullamcorper vivamus faucibus platea! Purus nam habitant dolor porttitor ante fusce convallis vehicula purus luctus. Ad consectetur lacinia morbi vehicula class dignissim class aptent. Amet laoreet mauris ipsum cras facilisis feugiat dignissim cras placerat imperdiet placerat dis. Eu magna quisque viverra nec praesent ut a suspendisse? Imperdiet facilisis etiam elit rhoncus. Conubia consectetur sem sapien vel nascetur adipiscing metus. Pulvinar libero duis scelerisque porta facilisi. Pellentesque nascetur, pellentesque et.
        </p>`,
        `<ul>
        <li>
        Senectus potenti nullam ipsum, phasellus aliquet consectetur nunc semper molestie.
        </li>
        <li>
        Cubilia non nec nullam tincidunt ante faucibus parturient, volutpat libero.
        </li>
        <li>
        Suscipit nisl egestas pulvinar hac odio vivamus quisque dis pharetra.
        </li>
        <li>
        Ultricies primis curabitur libero quisque ipsum magna per at accumsan.
        </li>
        <li>
        Phasellus mus eros praesent ac convallis accumsan nunc maecenas dictumst.
        </li>
        <li>
        Aptent dapibus, malesuada amet lobortis turpis conubia magna dolor turpis.
        </li>
        <li>
        Cubilia torquent sit ligula, ligula cursus fusce suscipit curabitur libero!
        </li>
        <li>
        Dictumst mollis odio posuere bibendum leo habitant maecenas aliquet ridiculus.
        </li>
        <li>
        At ligula luctus mi dolor vehicula; risus massa augue elit.
        </li>
        <li>
        Laoreet accumsan mattis sociosqu metus condimentum rutrum magnis porttitor mus.
        </li>
        </ul>`,
        90,
        "/src/images/bakedchicken.jpg"
    ),
    new Recipe(
        17279,
        "Fish and Chips",
        "Entrée",
        `<p>
        Habitant tempus eget nullam metus fusce quam, quam netus interdum tempor fringilla elit. Urna nascetur nisi dignissim morbi mus aptent. Imperdiet bibendum eget vestibulum eget mollis nulla netus. Leo mus praesent praesent mauris dignissim! Laoreet ut iaculis facilisis in accumsan libero platea? Mus libero euismod quam inceptos. Mauris fusce dictumst venenatis. Magna at suscipit, sem ornare purus.
        </p>
        <p>
        Fusce imperdiet dolor rutrum pharetra lobortis curae; pulvinar faucibus suspendisse! Velit bibendum volutpat accumsan tempor congue libero. Dolor fusce fringilla, vestibulum rutrum ultricies penatibus! Viverra malesuada rhoncus suspendisse. Mollis primis torquent augue phasellus rhoncus et curae; lobortis curae; ac vivamus. Himenaeos sapien aliquam euismod lacus parturient volutpat aliquet aliquet fringilla felis pellentesque lectus? Lacinia turpis enim velit donec vehicula duis accumsan. Viverra duis hendrerit sodales.
        </p>`,
        `<ul>
        <li>
        Enim aliquam feugiat posuere lectus auctor penatibus dis eu nam!
        </li>
        <li>
        Class proin litora ornare pretium, netus enim in dapibus elementum.
        </li>
        <li>
        Malesuada ut vitae tempus lectus in netus ultrices rhoncus pharetra.
        </li>
        <li>
        Ante aptent quis urna nullam dui vulputate adipiscing amet dictum.
        </li>
        <li>
        Commodo felis diam rutrum aenean luctus molestie eu felis suscipit!
        </li>
        </ul>`,
        85,
        "/src/images/fishandchips.jpg"
    ),
    new Recipe(
        23362,
        "Hearty Casserole",
        "Entrée",
        `<p>
        Imperdiet nec viverra, facilisi tempus mauris a. Vivamus, tellus a lobortis? Posuere eu phasellus, ullamcorper ac. Venenatis nunc arcu egestas ullamcorper urna netus dictum quisque habitasse rutrum. Odio mi proin nibh nam fermentum dis. Nunc ornare tellus per pretium praesent amet posuere nisi sem conubia nascetur? In neque sagittis congue auctor curae; interdum libero quam nisi. Libero nunc nibh laoreet adipiscing dis euismod, malesuada litora sodales tristique laoreet mus. Aptent himenaeos proin hendrerit aliquam potenti pellentesque metus viverra. Natoque nascetur.
        </p>
        <p>
        Laoreet sapien libero lacinia curae;. Rhoncus massa eget ridiculus elit. Amet odio tellus tortor tincidunt bibendum proin ad facilisis ligula fames pharetra. Cursus tellus id dictum arcu non rutrum tempor. Molestie nibh pellentesque vitae molestie eu feugiat curae; fringilla dictum hendrerit ligula. Condimentum netus lorem euismod eu phasellus donec mattis ultricies in. Turpis eget vulputate metus dapibus posuere habitant facilisis purus in molestie. Leo mi vivamus ante facilisis himenaeos turpis platea torquent bibendum vitae. Mi potenti iaculis duis fermentum dolor curabitur in donec?
        </p>
        <p>
        Lobortis sagittis litora cursus velit hac accumsan, hac nostra sem. Maecenas imperdiet eleifend malesuada natoque bibendum nec pulvinar dignissim praesent metus senectus. Molestie torquent ad in, aliquet et dignissim ultricies. Ullamcorper congue penatibus mus leo nam mattis porta nostra! Parturient rutrum enim porttitor eros consequat morbi cursus euismod. Quis montes dictumst quisque amet ante mi porta magna. Sed taciti nam pulvinar varius risus malesuada nullam hac. Sapien.
        </p>`,
        `<ul>
        <li>
        Tellus torquent ultrices adipiscing eros suspendisse habitant morbi rutrum convallis!
        </li>
        <li>
        Vivamus phasellus conubia fringilla auctor netus nullam integer amet ipsum.
        </li>
        <li>
        Aliquet eros mollis sociosqu litora semper molestie neque habitasse neque.
        </li>
        <li>
        Pretium porttitor suscipit vestibulum nulla pretium quisque, vehicula ipsum feugiat.
        </li>
        <li>
        Venenatis viverra auctor convallis integer gravida enim inceptos, nullam ipsum.
        </li>
        <li>
        Metus arcu pulvinar massa maecenas pulvinar risus justo purus porta.
        </li>
        <li>
        Cras cursus, risus suspendisse fames arcu platea tortor consequat cum.
        </li>
        <li>
        Sociosqu nunc tellus feugiat nulla sit interdum rutrum sagittis faucibus.
        </li>
        <li>
        Sollicitudin litora pulvinar cursus ut a viverra malesuada est pulvinar.
        </li>
        </ul>`,
        120,
        "/src/images/casserole.jpg"
    ),
    new Recipe(
        66171,
        "Grandma's Lasagna",
        "Entrée",
        `<p>
        Nascetur facilisi feugiat velit maecenas arcu molestie condimentum venenatis justo, purus maecenas. Quam volutpat scelerisque accumsan cubilia bibendum egestas cras hendrerit sapien non eros. Egestas scelerisque elementum maecenas, nulla justo torquent. Habitasse odio penatibus nam nec dictum nisl facilisi fringilla? Vestibulum elementum viverra turpis erat dis vivamus? Metus facilisi faucibus class porta viverra semper! Urna dolor congue ut scelerisque congue quam iaculis. Auctor, tellus nisi vivamus curabitur nam lectus nostra. Volutpat purus nec primis ad diam ac neque. Penatibus sapien, eros aliquam.
        </p>
        <p>
        Mi dolor interdum praesent nibh dis a dis eget. Nostra dapibus montes nostra enim. Purus tristique, interdum risus lacus consectetur torquent. Leo cum blandit magnis posuere, lorem volutpat praesent ullamcorper sapien. Rhoncus curae; nisi fusce porttitor elit ad convallis non purus cursus. Mattis libero est dapibus rutrum pulvinar, parturient faucibus per laoreet? Suscipit elit neque ante aenean. Montes porta mauris taciti eros neque penatibus curabitur at ante hendrerit vulputate? Duis sagittis aliquet etiam.
        </p>`,
        `<ul>
        <li>
        Ligula nullam ut tempor aptent primis suspendisse convallis congue hendrerit.
        </li>
        <li>
        Natoque euismod vel; mi imperdiet neque litora in vehicula cum.
        </li>
        <li>
        Nisi elit ornare torquent dictum facilisi aliquam sapien litora pretium.
        </li>
        <li>
        Suscipit sed arcu varius laoreet et mattis cursus porttitor libero.
        </li>
        <li>
        Risus torquent ultrices cursus congue duis litora ornare scelerisque eleifend.
        </li>
        <li>
        Dis sociosqu quisque consectetur mollis, aenean orci fames aliquam accumsan.
        </li>
        <li>
        Ullamcorper faucibus vitae duis fermentum aliquet eget lacus ut ultrices.
        </li>
        <li>
        Tempor accumsan felis litora per sociis sociosqu sollicitudin luctus interdum.
        </li>
        <li>
        Convallis platea magnis amet proin maecenas curae; potenti pretium consequat.
        </li>
        </ul>`,
        175,
        "/src/images/Lasagna.jpg"
    ),
    new Recipe(
        12690,
        "Sweet Barbacoa Quesadilla",
        "Entrée",
        `<p>
        Per penatibus cursus tortor aenean ligula fermentum nisl augue egestas conubia amet. Erat orci, blandit quisque porttitor sociis habitasse leo? Tristique commodo donec adipiscing nascetur suscipit ut urna! Metus feugiat tellus dui enim velit vulputate inceptos habitant! Porta egestas augue adipiscing inceptos himenaeos consectetur luctus nam. Pretium etiam penatibus neque tempus class neque torquent mollis. Vivamus pharetra lectus eros libero fusce donec feugiat cum potenti scelerisque litora duis. Dapibus auctor faucibus class per lorem. Lobortis massa eu, etiam velit hendrerit. Odio aenean luctus porttitor quis.
        </p>`,
        `<ul>
        <li>
        Erat ultricies molestie luctus tincidunt habitasse praesent, mauris nascetur viverra.
        </li>
        <li>
        Natoque ridiculus id neque dignissim per fermentum quisque, cursus tempus.
        </li>
        <li>
        Pellentesque sagittis a, eros sodales penatibus semper ante sapien habitant.
        </li>
        <li>
        Class pulvinar urna netus sociosqu nascetur tellus quisque ultricies semper.
        </li>
        <li>
        Ligula curae; proin sapien turpis et, adipiscing fusce nunc eget!
        </li>
        <li>
        Pharetra interdum at egestas sit aenean fermentum diam, mollis vel.
        </li>
        <li>
        Tortor vel consectetur arcu mi quisque convallis lacinia egestas rhoncus.
        </li>
        <li>
        Euismod scelerisque a viverra eget elementum cum nisl potenti consequat.
        </li>
        </ul>`,
        30,
        "/src/images/quesadilla.jpg"
    ),
    new Recipe(
        22414,
        "Margherita Pizza",
        "Entrée",
        `<p>
        Morbi inceptos aliquet nullam dictumst habitasse mollis porttitor cubilia gravida felis fames. Ullamcorper commodo, suspendisse faucibus sollicitudin massa curae; sodales urna imperdiet nostra gravida? Mauris cubilia hendrerit fringilla enim fames mollis. Tincidunt quis elementum fermentum tellus. Aptent fames pellentesque consequat litora mauris fusce vestibulum! Eget malesuada odio quisque egestas libero penatibus interdum diam non neque himenaeos. Proin metus sociosqu viverra fermentum vitae. Amet nisl lacus litora torquent sapien suscipit faucibus? Posuere, vel elit condimentum.
        </p>
        <p>
        Natoque iaculis sapien consequat lorem blandit mauris dignissim platea varius enim elementum? Urna pharetra pellentesque enim. Ut facilisi quis aliquet gravida orci? Nibh tempus adipiscing tincidunt ac fermentum vivamus phasellus rutrum. Enim tortor vitae adipiscing accumsan accumsan suscipit imperdiet dis? Et sociosqu felis molestie libero scelerisque quam et neque. Quis conubia feugiat primis etiam urna semper praesent laoreet cursus. Lobortis cursus risus; viverra curae; quisque integer malesuada mauris vestibulum porta. Mauris elit condimentum nibh euismod mollis hendrerit platea habitasse.
        </p>`,
        `<ul>
        <li>
        Rhoncus egestas quisque metus ipsum sodales sodales, felis nisl ultrices.
        </li>
        <li>
        Libero dapibus senectus sociosqu parturient montes gravida ut donec commodo.
        </li>
        <li>
        Nam cum commodo nisl ornare elementum gravida tristique amet metus.
        </li>
        <li>
        Magna fusce ornare curabitur massa turpis curae; suspendisse netus aptent!
        </li>
        <li>
        Pharetra feugiat sapien lectus donec dictumst elit, sagittis porttitor varius.
        </li>
        <li>
        Cubilia sagittis non augue vitae pellentesque, nisi malesuada molestie a.
        </li>
        </ul>`,
        45,
        "/src/images/pizza.jpg"
    ),
    new Recipe(
        22828,
        "Steak and Fries",
        "Entrée",
        `<p>
        Nam, maecenas vitae et porttitor purus hac consectetur integer. Porta praesent scelerisque porttitor volutpat suscipit eleifend massa sociis vivamus torquent tellus? Cubilia auctor parturient adipiscing malesuada curabitur fusce nulla sed ut tempus. Leo praesent mattis, nostra facilisis. Facilisis id netus ligula, velit dolor volutpat nec dictum sociis sodales condimentum primis. Amet magnis tellus rhoncus natoque aliquet nisl penatibus. Habitasse platea nulla phasellus dictum duis vitae pretium urna. Urna sapien ut metus tellus interdum, torquent auctor nunc fusce? Habitant fusce sociosqu facilisis vivamus ultricies lobortis.
        </p>
        <p>
        Nostra mollis netus ipsum aliquam! Integer arcu habitasse adipiscing. Posuere duis, sollicitudin imperdiet purus habitasse! Tristique cursus malesuada torquent volutpat ac sociis. Ultrices platea duis senectus placerat ante, malesuada primis accumsan turpis? Aenean fusce penatibus ligula. Scelerisque ad eget proin. Interdum tristique curabitur lobortis dictum erat risus etiam cubilia penatibus hac fusce. Et tortor facilisis ultricies arcu himenaeos porttitor eu neque adipiscing nascetur integer. Facilisi hendrerit non sem congue primis gravida sociosqu. Conubia arcu at sagittis curabitur nostra luctus condimentum quam.
        </p>`,
        `<ul>
        <li>
        Tempus ac natoque dictum rutrum feugiat sagittis laoreet mattis faucibus.
        </li>
        <li>
        Facilisi blandit pharetra montes nec nisi ad elementum, hendrerit quam.
        </li>
        <li>
        Elementum consequat leo sapien facilisis penatibus venenatis ultricies fermentum morbi.
        </li>
        <li>
        Velit tincidunt, lectus sem interdum fermentum montes interdum adipiscing turpis.
        </li>
        </ul>`,
        30,
        "/src/images/steak.jpg"
    ),
    new Recipe(
        49361,
        "Charcuterie Board",
        "Appetizer",
        `<p>
        Velit magnis turpis potenti semper eget laoreet magna at. Neque primis auctor auctor nibh in neque facilisis mattis tempor primis vestibulum class. Massa fermentum condimentum magna senectus ridiculus cubilia aliquam fermentum diam torquent in. Viverra metus habitant consequat est id. Mus ullamcorper at egestas habitant nisl conubia. Diam fermentum etiam ullamcorper consequat morbi. Velit dictum egestas augue metus nostra dis parturient tristique? Dis bibendum.
        </p>
        <p>
        Dignissim conubia ridiculus placerat aliquet maecenas donec imperdiet nunc commodo pretium tellus. Tellus duis tellus porttitor dapibus suscipit libero phasellus rutrum volutpat netus. Ipsum ante euismod class per ullamcorper urna arcu. Mollis adipiscing eu adipiscing duis? Aliquet phasellus nascetur mollis inceptos. Scelerisque nisl dui porta potenti eget, ipsum fringilla auctor.
        </p>`,
        `<ul>
        <li>
        Sollicitudin penatibus rutrum varius proin netus vivamus condimentum tempus netus.
        </li>
        <li>
        Rutrum montes porttitor non odio risus sollicitudin convallis condimentum inceptos.
        </li>
        <li>
        Fusce cras facilisi curabitur feugiat a natoque dictum mi aptent!
        </li>
        <li>
        Rhoncus fames nibh ut, tellus mollis nullam a luctus taciti.
        </li>
        <li>
        Vehicula ornare habitant blandit ac pharetra molestie ut sociis mattis.
        </li>
        <li>
        Ullamcorper urna cursus duis nunc dignissim eget consequat urna eget.
        </li>
        </ul>`,
        10,
        "/src/images/charcuterie.jpg"
    ),
    new Recipe(
        18911,
        "Fresh Garden Salad",
        "Appetizer",
        `<p>
        Potenti odio dis etiam pulvinar cras lacus eleifend odio rutrum viverra ante morbi. Eros, torquent iaculis posuere eleifend aenean ante pretium ipsum? Mauris taciti mi eu eros ipsum euismod curae; consequat lacinia platea fermentum. Eleifend vivamus sociis elit aliquet viverra. Morbi bibendum ante praesent bibendum amet pellentesque elit. Potenti molestie primis luctus neque magna ridiculus metus primis consectetur aliquet natoque. Ornare quam tempus est amet cursus nascetur montes conubia eleifend nam natoque aenean. Lobortis ultricies quis habitant ante dis imperdiet ut. Enim nisl consequat orci litora tempor. Fusce ad convallis elit etiam facilisi eros proin elit pharetra! Magnis eleifend justo ullamcorper aptent montes elementum. Morbi tortor ipsum etiam commodo ipsum magnis eu. In a leo torquent dis in tristique parturient nostra nisl habitasse aliquam vitae. Dignissim molestie ante nostra gravida. Ridiculus facilisis placerat curabitur etiam erat ornare; mus nisi ridiculus torquent? Orci dui odio netus habitant. Tempus eros tristique?
        </p>`,
        `<ul>
        <li>
        Elit vel quam fames himenaeos ac elit magnis purus pellentesque.
        </li>
        <li>
        Sit sociosqu ornare cubilia mus suspendisse ultrices tempor penatibus dignissim.
        </li>
        <li>
        Ultrices ac donec consectetur adipiscing vivamus lobortis vulputate lobortis lobortis.
        </li>
        <li>
        Sapien mus potenti et litora proin magnis sodales nisl elementum.
        </li>
        <li>
        Himenaeos enim lobortis placerat odio ultricies nec per suspendisse mattis.
        </li>
        <li>
        Sociosqu sociis lacus morbi, massa proin porta lorem est nullam.
        </li>
        </ul>`,
        10,
        "/src/images/gardensalad.jpg"
    ),
    new Recipe(
        72621,
        "Buttery Tomato Soup",
        "Appetizer",
        `<p>
        Parturient sociis blandit fringilla diam nostra hac aliquet. Faucibus justo ipsum amet ad nostra et. Adipiscing lacinia ante ut condimentum. Habitasse tristique non nascetur libero conubia magna felis iaculis non. Fermentum eget facilisi tristique ante aptent tempor venenatis augue. Lorem cum faucibus nibh quam! Elit lacinia habitant mauris sollicitudin urna faucibus potenti! Bibendum aptent nisi dictum quisque. Vivamus eu orci sagittis auctor tincidunt auctor suscipit consectetur! Magnis cubilia posuere, aliquam ut blandit justo lorem lacinia. Venenatis dui suspendisse semper felis praesent? Sollicitudin sociosqu nisl dis urna facilisis nullam? Tempor vehicula congue ligula odio? Felis dis eros venenatis adipiscing feugiat ridiculus erat. Habitasse semper ac consequat dictum. Magna cras morbi imperdiet aliquam. Ridiculus lorem elit luctus maecenas. Morbi proin vel himenaeos molestie vestibulum semper.
        </p>`,
        `<ul>
        <li>
        Facilisi egestas iaculis nunc sollicitudin, senectus scelerisque ante pharetra purus.
        </li>
        <li>
        Sollicitudin natoque orci vivamus cum tempus ullamcorper vel lacinia sociis.
        </li>
        <li>
        Sapien magnis nisi proin curae; faucibus ullamcorper et senectus purus.
        </li>
        <li>
        Praesent ac leo leo nostra senectus porta sem potenti dictumst.
        </li>
        </ul>`,
        30,
        "/src/images/tomatosoup.jpg"
    ),
    new Recipe(
        33916,
        "Maple Bacon Curls",
        "Appetizer",
        `<p>
        Bibendum urna inceptos molestie cubilia porta sociis aliquam dictumst mi quis accumsan auctor. Himenaeos nulla velit cursus sociis egestas faucibus sodales lobortis consectetur accumsan viverra. Elementum aliquam augue mus semper augue, diam mauris. Dignissim sapien auctor erat tincidunt fringilla, metus himenaeos viverra. Scelerisque felis lorem torquent scelerisque. Hendrerit per lacus nisl placerat nam. Orci dui felis porta sollicitudin at ipsum semper varius? Tempus velit gravida ullamcorper taciti platea scelerisque himenaeos. Ullamcorper nullam porttitor hendrerit lacus.
        </p>
        <p>
        Odio semper ut curae; eleifend proin suspendisse neque placerat dui blandit. Posuere fames, fermentum venenatis. Lectus netus litora sodales vestibulum hendrerit volutpat. Purus id turpis iaculis curae; suscipit. Cursus aptent curae; ullamcorper erat id risus arcu fusce ad. Quis ligula urna lobortis condimentum elementum faucibus at etiam tempus malesuada etiam eget. Vel auctor bibendum libero, interdum sed etiam aliquam.
        </p>
        <p>
        Mi class nam, class blandit pharetra mollis congue ultrices posuere. Integer aliquet aliquam sodales. Mi vestibulum duis sed sociis nullam porta? Dignissim viverra interdum tempus mauris in quis ullamcorper potenti ac felis. Fusce porta magnis iaculis. Lacinia non velit sed condimentum orci at fames mi malesuada per senectus natoque. Pretium viverra urna est erat lacus nulla platea ultricies hendrerit rutrum facilisi dictum. Class quam enim curae; fringilla quisque maecenas aliquet. Semper purus felis laoreet magnis mus porta nibh magnis nam proin felis? Suscipit conubia dis scelerisque facilisis urna tortor sem integer habitasse ac. Justo vitae.
        </p>`,
        `<ul>
        <li>
        Himenaeos fringilla libero egestas aliquam at elementum porta potenti nibh.
        </li>
        <li>
        Tortor consequat eleifend nibh torquent consequat suscipit mattis velit justo.
        </li>
        <li>
        Sollicitudin aptent eu habitant auctor adipiscing volutpat diam pulvinar non.
        </li>
        </ul>`,
        35,
        "/src/images/bacon.jpg"
    ),
    new Recipe(
        18407,
        "Parfait",
        "Appetizer",
        `<p>
        Fermentum, gravida aliquam eget. Eleifend duis urna inceptos pharetra vulputate malesuada curabitur senectus varius egestas. Adipiscing facilisi aliquam volutpat imperdiet. Accumsan eleifend molestie vestibulum, mollis enim massa. Nunc purus massa habitant. Viverra purus tempor quam mus nunc. Habitasse pulvinar dis auctor. Varius porta sociosqu non nisl faucibus phasellus pellentesque dui ac donec molestie. Nec convallis tortor non duis mus at etiam fusce class! Commodo facilisi morbi varius. Cras blandit lacinia laoreet cubilia! Non suscipit faucibus sapien volutpat mauris suspendisse vivamus et vivamus. Penatibus facilisi proin urna dictumst?
        </p>`,
        `<ul>
        <li>
        Suspendisse tempor habitant potenti tempor urna semper fames arcu laoreet.
        </li>
        <li>
        Habitasse sagittis mollis duis urna nisi justo maecenas morbi facilisi.
        </li>
        <li>
        Ridiculus integer malesuada vestibulum, potenti magnis volutpat eget urna erat.
        </li>
        <li>
        Ultrices cum dui nascetur consequat fusce magnis pretium ac pharetra.
        </li>
        </ul>`,
        10,
        "/src/images/parfait.jpg"
    ),
    new Recipe(
        17756,
        "Warm Dinner Rolls",
        "Appetizer",
        `<p>
        Elit vitae dolor feugiat morbi metus bibendum. Vehicula ante sed in. Lectus nibh vivamus amet sodales magna phasellus eu curae; facilisis conubia dictumst. Vulputate aliquet lorem tincidunt congue faucibus curabitur. Non posuere faucibus fermentum vitae magnis velit maecenas velit integer velit. Semper massa mattis suscipit orci vehicula vel montes dolor. Natoque viverra pharetra mi magna lorem est. Turpis varius commodo nisl accumsan tristique. Semper tortor lobortis adipiscing scelerisque conubia dignissim pretium turpis scelerisque ultrices vestibulum scelerisque.
        </p>`,
        `<ul>
        <li>
        Quisque feugiat at montes bibendum fringilla gravida tristique gravida vel.
        </li>
        <li>
        Vel commodo consectetur ac amet enim curabitur massa ac aliquet.
        </li>
        <li>
        Vel dolor pretium ut elit aptent euismod dui quam non.
        </li>
        <li>
        Nostra ridiculus suscipit, nec tellus fringilla inceptos scelerisque congue facilisi.
        </li>
        <li>
        Vel eu etiam odio nunc cubilia cras montes ipsum viverra.
        </li>
        </ul>`,
        120,
        "/src/images/dinnerrolls.jpg"
    ),
    new Recipe(
        13999,
        "Sweet Potato Fries",
        "Appetizer",
        `<p>
        Mus hac consequat himenaeos. Eros molestie nascetur dictum. Ipsum sollicitudin fusce suspendisse iaculis tincidunt hendrerit tempus praesent mattis phasellus mauris. Massa mauris nec hendrerit blandit ullamcorper eleifend sodales accumsan class donec cum nascetur. Fringilla cubilia consectetur dis consectetur inceptos nibh auctor potenti odio suscipit orci. Interdum faucibus morbi nisl vestibulum fusce platea adipiscing! Erat pretium proin dictum consectetur pellentesque potenti porta mus suscipit. Sollicitudin potenti aliquam enim, senectus penatibus a. Augue lobortis pharetra.
        </p>
        <p>
        Aliquet gravida ante potenti lobortis imperdiet quisque dui pretium. Nascetur vivamus platea orci scelerisque pretium proin porttitor curae; volutpat imperdiet habitasse bibendum. Parturient accumsan ad lorem cras, mi porta auctor commodo euismod nulla viverra luctus. Vivamus est dolor facilisi habitasse proin dictum, ultrices cras libero vivamus. Potenti, velit interdum nisi at lorem hendrerit. Proin dui facilisi venenatis vehicula sollicitudin netus. Nibh pretium cubilia vulputate nibh non massa euismod sit commodo.
        </p>`,
        `<ul>
        <li>
        Suscipit felis senectus quis turpis himenaeos senectus pellentesque velit lobortis.
        </li>
        <li>
        Elit phasellus fringilla venenatis sodales nisl lacus habitant tempus habitasse.
        </li>
        <li>
        Mollis semper cum commodo imperdiet class odio neque sapien tempor.
        </li>
        <li>
        Sagittis euismod a auctor est laoreet dolor posuere et posuere.
        </li>
        </ul>`,
        30,
        "/src/images/sweetpotatofries.jpg"
    ),
    new Recipe(
        46465,
        "Fresh Baked Pretzel",
        "Appetizer",
        `<p>
        Imperdiet euismod senectus porta? Urna pellentesque ac metus per lorem felis fermentum quis sapien est? Est nunc mauris porttitor. Tincidunt ut erat conubia, ipsum cras tempus purus aliquet torquent integer egestas nulla. Congue quisque orci mollis. Tempus molestie purus per accumsan diam eget suscipit per lacinia vestibulum. Scelerisque in tristique vitae sociosqu fringilla hac pharetra rutrum ac sit. Etiam lobortis eu lobortis at quam nisi nam.
        </p>
        <p>
        Nullam malesuada nisl sodales sollicitudin per nibh. Dis nec justo lacus class per tristique interdum dictumst montes euismod. Nisi eros libero rutrum cursus odio tellus class habitant tellus. Posuere tempus sagittis eros erat nunc. Primis arcu inceptos gravida lectus mi tempor proin sodales arcu auctor sapien nulla. Mus fringilla lectus conubia enim libero nullam proin.
        </p>`,
        `<ul>
        <li>
        Pharetra dui a conubia venenatis sociis nullam ante donec molestie.
        </li>
        <li>
        Curabitur porta gravida sociosqu nibh mauris lacus neque himenaeos ullamcorper.
        </li>
        <li>
        Metus turpis platea litora libero leo justo mauris quis dapibus.
        </li>
        <li>
        Donec dis pulvinar dignissim natoque turpis fames lacinia aenean posuere.
        </li>
        <li>
        Curae; tincidunt consequat auctor lobortis quis; taciti faucibus primis aptent.
        </li>
        </ul>`,
        35,
        "/src/images/pretzel.jpg"
    ),
]



