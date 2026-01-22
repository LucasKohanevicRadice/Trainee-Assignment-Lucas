# Arvioni Clauden toiminnasta

Claude on pääpiirteittäin aivan uskomaton työkalu. Tuotteliaisuus ja uusien teknologioiden oppiminen nopeutuu tekoälyjen avulla moninkertaisesti nopeammaksi. Claude on myös suhteessa muihin AI-koodausagentteihin parempi siinä mielessä, että se pystyy tarkasti käymään melko isojakin kokonaisuuksia läpi koodipohjassa, missä esim copilot ainakin aikaisemmin on ollut todella huono. Copilot ei edes vaatiessa ole suostunut käymään koodipohjaa läpi yksityiskohtaisesti.

Suurin ongelmani Clauden kanssa on LLM:ien perinteinen ongelma, hallusinointi. Tosin tässä projektissa hallusinoinnit jäivät yllättävän vähälle. Kyse oli pikemminkin siitä, että Claude teki asioita ilman lupaa. Ainoa suoranainen 'hallusinaatio' oli kun Claude loi täysin turhan tiedoston 'nul' ilman mitään tiedostopäätteitä. Se sisälsi jotain tekstiä meidän keskustelustamme, eli tämä oli ilmeiesti jokin häiriö Clauden sisäisessä järkeilyssä ja toiminnassa jossa sen piti kirjoittaa chättiimme jotain, mutta päätyikin tekemään tiedoston, johon alkoi kirjoittamaan sen sijasta. Tästä huolimatta tekstiä oli vain noin puolikkaan lauseen verran, eli Claude on korjannut ja iteroinut omaa toimintaansa jopa kesken lauseen kirjoittamisen, mikä on mielestäni todella vakuuttavaa.

Toinen ongelmani on se, että Claude yrittää jatkuvasti ylimitoittaa ratkaisujaan (over-engineering). Pitää olla kokoajan todella tarkkana ja ohjata tarkasti, mitä Claude tekee ettei implementaatiot räjähdä käsiin. Tehtävänannossa mainittiin sana 'yksinkertainen' api. Eikä tämä toteutus mikään yksinkertainen MVP ratkaisu ole, vaikka yritinkin painottaa sitä että pidetään ratkaisu yksinkertaisena. Tämä voi kylläkin johtua osaksi siitä, että annoin hyvin kattavat konfiguraatiot Claudelle tiedostoon CLAUDE.md, joten otan osakseni vastuun siitä. Tästä huolimatta en halunnut lähteä yksinkertaistamaan hirveästi implementaatiota, koska;

A) Haluan näyttää rekrytoijille että pystyn hallitsemaan tämän tason koodin tuottamista ja ymmärrän ohjelmointia laajemminkin kuin vain yksinkertaisen APIn verran.

B) Kirjoitettu koodi oli järkevää ja se saatiin tehtyä mielestäni järkevässä ajassa.
Yritän kuitenkin parhaani erottautua joukosta positiivisella tavalla koska aidosti haluan tämän työpaikan.

Sanoisin että Claude on kuin uskomattoman älyjäs, lahjakas ja toimelias lapsi, joka kuitenkin vaatii jatkuvaa valvontaa ettei mopo lähe ns 'käsistä'.

---

---

# ALEMPANA MUISTIINPANOJA MITÄ KIRJOTIN OHJELMOINNIN AIKANA

## Pohdintaa ja toimintatapoja perustuen jo olemassaolevaan ymmärrykseeni / kokemukseeni tekoälyagenttien kanssa ohjelmoinnista, ennen ohjelmoinnin aloittamista.

1. En liittänyt dokumentteja agentille suoraan välttääkseni kielletyn sanaparin committaamista.
2. Liitin heti devaamisen alussa claude.md tiedoston optimoidakseni tekoälyn toimintaa. Koodausagenteilla on yleisiä tunnettuja puutoksia ja on yleisestikkin suositeltua luoda nämä konffaus filut, kaikkiin projekteihin, tekoälyagentin toiminnan optimoimiseksi, ja sen myötä myös tokenien käytön vähentämiseksi.

# Pohdintaa projektin suunnitteluvaiheessa

1. Claude yritti over-engineerata toiminnallisuutta luomalla endpointin kaikkien huoneitten hakemiselle. Ohjeistin pitämään implementaation sellaisena kuin tehtävänannossa on ohjeistettu. Eli tässä tilanteessa tarvittavat endpointit:

- Varauksen luonnille
- Varauksen Peruutukselle
- Varausten katselulle

2. Claude kehotti suunnitteluvaiheessa yhdistämään huonelogiikan yksinkertaisuuden vuoksi. Vaikka tämä olisikin tässä tilanteessa järkevä ratkaisu huomioonottaen tämän tehtävän laajuus, niin päätin että pidetään funktionaalisuudet ja logiikka eriytettyinä, koska se kuvastaa parhaiten todellista devaamista ja hyviä ohjelmointikäytäntöjä.

# Pohdintaa ohjelmoidessa ennen ensimmäistä committia

1. Claude epäonnistui pitämään sovitusta 'kysy ennenkuin muokkaat' säännöstä kiinni. Hyväksyin kuitenkin muutokset koska ne vaikuttivat järkeville, mutta mainitsin asiasta vahvistaakseni säännön noudattamista.

2. Uuden session alkaessa ja uutta suunnitelmaa luodessa Claude lisäsi CORSin sisällyttämisen projektiin jostain syystä, vaikka tarkoituksena ei ole luoda minkääntyyppistä frontti toiminnallisuutta. Tästä huomautin Claudea, claude tajusi tarpeettomuuden ja hylkäsi CORS ajatuksen.

3. Lisäsi jonkun tiedoston 'nul' ? Ihan ihme oma juttu.
