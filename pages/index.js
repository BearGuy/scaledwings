import { SideMenu } from '../components/SideMenu';
import { Content } from '../components/Content';
import { Layout } from '../components/Layout';
import Head from 'next/head'
import axios from 'axios';

export default function Home({ posts }) {
  console.log({ posts })
  return (
    <Layout>
      {/* <Head>
        <title>Scaledwings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid grid-cols-1 md:grid-cols-300-auto">
        <SideMenu /> */}
      <Content posts={posts} />
      {/* </main> */}
    </Layout>
  )
}

const instagramRegExp = new RegExp(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)
export async function getStaticProps() {
  // const response = await axios.get('https://www.instagram.com/scaledwings')
  // const expression = response.data.match(instagramRegExp)[1].slice(0, -1);
  // const json = JSON.parse(expression)
  // console.log({ data: json.entry_data })
  // const edges = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges
  // .splice(0, 8)
  // const posts = edges.map(({ node }) => {
  //   return {
  //     url: `https://www.instagram.com/p/${node.shortcode}/`,
  //     thumbnailUrl: node.thumbnail_src,
  //     displayUrl: node.display_url,
  //     caption: node.edge_media_to_caption.edges[0].node.text
  //   }
  // })


  // if (!posts) {
  //   return {
  //     notFound: true,
  //   }
  // }


  // return {
  //   props: { posts }, // will be passed to the page component as props
  // }

  const data = {
    "posts": [
      {
        "url": "https://www.instagram.com/p/CM2Y8g2ldRZ/",
        "thumbnailUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.109.1440.1440a/s640x640/164333659_2839146169633383_2212378272161517351_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=82MYlR_EbkgAX_WmNyh&edm=ABfd0MgAAAAA&ccb=7-4&oh=ed1187cd1963a98cabed638ffd6eb968&oe=609056F9&_nc_sid=7bff83",
        "displayUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/164333659_2839146169633383_2212378272161517351_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=82MYlR_EbkgAX_WmNyh&edm=ABfd0MgAAAAA&ccb=7-4&oh=f3af3118e6d67bf9e4846aae780e8970&oe=6091F497&_nc_sid=7bff83",
        "caption": "Love drawing bitches n birds ☺️\n.\n.\n.\n.\n#blackandgrey #blackandgreyart #gray #blackandgreytattoo #raven #birdillustration #raventattoo #ravenillustration #ladyface #ladyfacetattoo #blackandwhite #witchyvibes"
      },
      {
        "url": "https://www.instagram.com/p/CMTlsmOHr51/",
        "thumbnailUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.179.1440.1440a/s640x640/158999436_1464505627666561_4528694561113112092_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=MA-cnsGvbi8AX8Bx062&edm=ABfd0MgAAAAA&ccb=7-4&oh=38c46f10b507e2ac2e2e841626b76979&oe=60908AE2&_nc_sid=7bff83",
        "displayUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/158999436_1464505627666561_4528694561113112092_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=MA-cnsGvbi8AX8Bx062&edm=ABfd0MgAAAAA&ccb=7-4&oh=86d67fbf6cd5fa27de417a10a0d1b134&oe=6092DB60&_nc_sid=7bff83",
        "caption": "🐱 this Jaguar kitty was a mountain lion for awhile til I got the courage to paint his spots!! Thanks 4 looking 🖤\n.\n.\n.\n.\n#jaguar #jaguartattoo #lion #cat #floraldesign #gouachepainting #watercolorpainting #traditionalart #monarchbutterfly #butterflytattoo #hibiscus #floraltattoo #botanicaldrawing #gardeninspiration"
      },
      {
        "url": "https://www.instagram.com/p/CFSOSyknkhx/",
        "thumbnailUrl": "https://instagram.fymy1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/119803644_696290637896947_7647320502735643652_n.jpg?tp=1&_nc_ht=instagram.fymy1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=4u8EhcHoYVMAX_5aVc-&edm=ABfd0MgAAAAA&ccb=7-4&oh=dfc7f6a9aad447f22cfc8e3c5dd5125f&oe=60938C87&_nc_sid=7bff83",
        "displayUrl": "https://instagram.fymy1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/119803644_696290637896947_7647320502735643652_n.jpg?tp=1&_nc_ht=instagram.fymy1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=4u8EhcHoYVMAX_5aVc-&edm=ABfd0MgAAAAA&ccb=7-4&oh=72f5b12e7b5d2b4547537266fd5731d6&oe=6092F063&_nc_sid=7bff83",
        "caption": "Man I Love (poison dart) Frogs 🐸 \n.\nand torch ginger flowers, Venus fly traps, and a frangipani horn worm.\n.\nEdges seem warpy on camera from basically waterboarding the paper but I promise it’s straight. Sakura watercolours on not-arches watercolour paper 🎨\n.\nBtw if any of y’all want prints of anything I made feel free to dm me 😊\n.\n#frog #poisondartfrog #watercolorpainting #frogpainting #watercolorfrog #watercolorart #monsteraplant #venusflytrap #torchgingerflower #ottawaartist #frangipanihornworm #pseudosphinx #pseudosphynxtetrio #SAVETHEFUCKINGRAINFOREST"
      },
      {
        "url": "https://www.instagram.com/p/CEffC6jnYOu/",
        "thumbnailUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/118473173_168858388144455_2608520919021027673_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=lvRMr0FpxQkAX-f3llP&edm=ABfd0MgAAAAA&ccb=7-4&oh=3baea5b8121d5b2df821da815da9be3f&oe=60930157&_nc_sid=7bff83",
        "displayUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/118473173_168858388144455_2608520919021027673_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=lvRMr0FpxQkAX-f3llP&edm=ABfd0MgAAAAA&ccb=7-4&oh=f9337b3a4274a77fa351b606d53ee3ac&oe=609115F3&_nc_sid=7bff83",
        "caption": "Just another pink flower painting🌸\n.\n.\n.\n#peonies #peonyart #neotrad #neotradflower #watercolorflowers #watercolorart #watercolorpeony #painting #floralart #natureart #flowerdesign"
      },
      {
        "url": "https://www.instagram.com/p/CEVDRYln8A2/",
        "thumbnailUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/118209340_190589335824954_9013680792813909824_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=NhvA0qs1MpQAX8HNNI0&edm=ABfd0MgAAAAA&ccb=7-4&oh=c27101a7961d183379bb90a44e8c56d1&oe=60912295&_nc_sid=7bff83",
        "displayUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/118209340_190589335824954_9013680792813909824_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=NhvA0qs1MpQAX8HNNI0&edm=ABfd0MgAAAAA&ccb=7-4&oh=24831b0f658c3d84b90a6712b6883bf8&oe=6091AF11&_nc_sid=7bff83",
        "caption": "I’m making my own tarot deck. This is how I see Justice and The Hanged (wo)Man ✨ the blood was supposed to be subtle oops guess the bastard deserved it. \n\nMight add some seaweed around water trapeze lady. \n.\n#tarot #tarotcards #occultart #justicetarot #tarotart #thehangedman #esotericart #watercolorcards #cardmaking#inkwell #blood #featherpen #trapeze #watercolorgirl #illustration #divination"
      },
      {
        "url": "https://www.instagram.com/p/CD43VmxHckE/",
        "thumbnailUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/117358105_721617528678113_7182519774575960435_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=pSTPOCaSKD0AX_x0qMB&edm=ABfd0MgAAAAA&ccb=7-4&oh=a3ef60fb02e41c268953ad120c75f3f5&oe=60911E38&_nc_sid=7bff83",
        "displayUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/117358105_721617528678113_7182519774575960435_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=pSTPOCaSKD0AX_x0qMB&edm=ABfd0MgAAAAA&ccb=7-4&oh=b465111297c7c39e5cecd547dde10fa1&oe=60938E94&_nc_sid=7bff83",
        "caption": "A bunch of Canadian everyday outdoorsy things - rainbowy Ammolite stone (ok maybe not so common), pinecone, inukshuk, goose feathers, elk antler, choke cherries, and an oak leaf not maple lol 🇨🇦 Watercolour of course!!\n.\n#fuckyeahferns #watercolor #illustration #canadianart #nature #watercolorflowers #thegreatoutdoors #feathers #antlers #ammolite #crystalart #inukshuk"
      },
      {
        "url": "https://www.instagram.com/p/CDxAgCwH9ve/",
        "thumbnailUrl": "https://instagram.fymy1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/117168792_114704180182708_8345139681841634356_n.jpg?tp=1&_nc_ht=instagram.fymy1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=JTA64-uo5MQAX85PJOE&edm=ABfd0MgAAAAA&ccb=7-4&oh=8150fa3f253a72912fd515871ddccb57&oe=609398E1&_nc_sid=7bff83",
        "displayUrl": "https://instagram.fymy1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/117168792_114704180182708_8345139681841634356_n.jpg?tp=1&_nc_ht=instagram.fymy1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=JTA64-uo5MQAX85PJOE&edm=ABfd0MgAAAAA&ccb=7-4&oh=35394bb93a07e390b1984eec2005802a&oe=60905C85&_nc_sid=7bff83",
        "caption": "Kali, the goddess of war and destruction\n.\n.\nShe destroys evil and carries away the spirits of slain warriors. Wearing a necklace of skulls. Do not make fun of the heart tattoo on her middle finger rumour has it she got so pissed she turned blue and drank the blood of the demon she was slashing before the blood could hit the ground and spout another demon... Hindu mythology is #metalasfuck .\n.\nThere are a lot of cool versions of stories about her - she’s both a real person and people’s manifestation of their anger and uh bloodthirst (there’s just no other way to describe it lol)\n.\n🎨 Watercolour and my cool new micron pens! \n.\n#kali #watercolor #sakurawatercolor #art #613art #watercolorillustration #neotraditional #neotradart #neotradpainting #traditionalart #painting #folklore #mythology #goddess #skullart #braids #peacockfeather #trishula #scimitar #india #warrior #warriorwoman #queenshit #nochill #easternmythology #metal"
      },
      {
        "url": "https://www.instagram.com/p/CDkNHx9HAmD/",
        "thumbnailUrl": "https://instagram.fymy1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/116249632_218846359458271_397023360086522078_n.jpg?tp=1&_nc_ht=instagram.fymy1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=ShktCvoQhSwAX9-g2_B&edm=ABfd0MgAAAAA&ccb=7-4&oh=753fbaae1c9bccde6c5d40266d004735&oe=6090A3CA&_nc_sid=7bff83",
        "displayUrl": "https://instagram.fymy1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/116249632_218846359458271_397023360086522078_n.jpg?tp=1&_nc_ht=instagram.fymy1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=ShktCvoQhSwAX9-g2_B&edm=ABfd0MgAAAAA&ccb=7-4&oh=0e06f6a31ba79f5f118633ff7b519ae7&oe=609135BF&_nc_sid=7bff83",
        "caption": "Nurturing. 🐇💀 I showed this to my brother he said “why”\n.\nWatercolour (acrylic for the sky)\n.\n#bunnyart #theyrefinechill #watercolor #watercolorpainting #acrylic #painting #bones #skull #skeletonart #creepy #cute #illustration #mushroomart #wildflowers #ferns #FUCKYEAHFERNS #ireallylikeferns"
      },
      {
        "url": "https://www.instagram.com/p/CM2Y8g2ldRZ/",
        "thumbnailUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.109.1440.1440a/s640x640/164333659_2839146169633383_2212378272161517351_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=82MYlR_EbkgAX_WmNyh&edm=ABfd0MgAAAAA&ccb=7-4&oh=ed1187cd1963a98cabed638ffd6eb968&oe=609056F9&_nc_sid=7bff83",
        "displayUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/164333659_2839146169633383_2212378272161517351_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=82MYlR_EbkgAX_WmNyh&edm=ABfd0MgAAAAA&ccb=7-4&oh=f3af3118e6d67bf9e4846aae780e8970&oe=6091F497&_nc_sid=7bff83",
        "caption": "Love drawing bitches n birds ☺️\n.\n.\n.\n.\n#blackandgrey #blackandgreyart #gray #blackandgreytattoo #raven #birdillustration #raventattoo #ravenillustration #ladyface #ladyfacetattoo #blackandwhite #witchyvibes"
      },
      {
        "url": "https://www.instagram.com/p/CMTlsmOHr51/",
        "thumbnailUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.179.1440.1440a/s640x640/158999436_1464505627666561_4528694561113112092_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=MA-cnsGvbi8AX8Bx062&edm=ABfd0MgAAAAA&ccb=7-4&oh=38c46f10b507e2ac2e2e841626b76979&oe=60908AE2&_nc_sid=7bff83",
        "displayUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/158999436_1464505627666561_4528694561113112092_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=MA-cnsGvbi8AX8Bx062&edm=ABfd0MgAAAAA&ccb=7-4&oh=86d67fbf6cd5fa27de417a10a0d1b134&oe=6092DB60&_nc_sid=7bff83",
        "caption": "🐱 this Jaguar kitty was a mountain lion for awhile til I got the courage to paint his spots!! Thanks 4 looking 🖤\n.\n.\n.\n.\n#jaguar #jaguartattoo #lion #cat #floraldesign #gouachepainting #watercolorpainting #traditionalart #monarchbutterfly #butterflytattoo #hibiscus #floraltattoo #botanicaldrawing #gardeninspiration"
      },
      {
        "url": "https://www.instagram.com/p/CFSOSyknkhx/",
        "thumbnailUrl": "https://instagram.fymy1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/119803644_696290637896947_7647320502735643652_n.jpg?tp=1&_nc_ht=instagram.fymy1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=4u8EhcHoYVMAX_5aVc-&edm=ABfd0MgAAAAA&ccb=7-4&oh=dfc7f6a9aad447f22cfc8e3c5dd5125f&oe=60938C87&_nc_sid=7bff83",
        "displayUrl": "https://instagram.fymy1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/119803644_696290637896947_7647320502735643652_n.jpg?tp=1&_nc_ht=instagram.fymy1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=4u8EhcHoYVMAX_5aVc-&edm=ABfd0MgAAAAA&ccb=7-4&oh=72f5b12e7b5d2b4547537266fd5731d6&oe=6092F063&_nc_sid=7bff83",
        "caption": "Man I Love (poison dart) Frogs 🐸 \n.\nand torch ginger flowers, Venus fly traps, and a frangipani horn worm.\n.\nEdges seem warpy on camera from basically waterboarding the paper but I promise it’s straight. Sakura watercolours on not-arches watercolour paper 🎨\n.\nBtw if any of y’all want prints of anything I made feel free to dm me 😊\n.\n#frog #poisondartfrog #watercolorpainting #frogpainting #watercolorfrog #watercolorart #monsteraplant #venusflytrap #torchgingerflower #ottawaartist #frangipanihornworm #pseudosphinx #pseudosphynxtetrio #SAVETHEFUCKINGRAINFOREST"
      },
      {
        "url": "https://www.instagram.com/p/CEffC6jnYOu/",
        "thumbnailUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/118473173_168858388144455_2608520919021027673_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=lvRMr0FpxQkAX-f3llP&edm=ABfd0MgAAAAA&ccb=7-4&oh=3baea5b8121d5b2df821da815da9be3f&oe=60930157&_nc_sid=7bff83",
        "displayUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/118473173_168858388144455_2608520919021027673_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=lvRMr0FpxQkAX-f3llP&edm=ABfd0MgAAAAA&ccb=7-4&oh=f9337b3a4274a77fa351b606d53ee3ac&oe=609115F3&_nc_sid=7bff83",
        "caption": "Just another pink flower painting🌸\n.\n.\n.\n#peonies #peonyart #neotrad #neotradflower #watercolorflowers #watercolorart #watercolorpeony #painting #floralart #natureart #flowerdesign"
      },
      {
        "url": "https://www.instagram.com/p/CEVDRYln8A2/",
        "thumbnailUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/118209340_190589335824954_9013680792813909824_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=NhvA0qs1MpQAX8HNNI0&edm=ABfd0MgAAAAA&ccb=7-4&oh=c27101a7961d183379bb90a44e8c56d1&oe=60912295&_nc_sid=7bff83",
        "displayUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/118209340_190589335824954_9013680792813909824_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=NhvA0qs1MpQAX8HNNI0&edm=ABfd0MgAAAAA&ccb=7-4&oh=24831b0f658c3d84b90a6712b6883bf8&oe=6091AF11&_nc_sid=7bff83",
        "caption": "I’m making my own tarot deck. This is how I see Justice and The Hanged (wo)Man ✨ the blood was supposed to be subtle oops guess the bastard deserved it. \n\nMight add some seaweed around water trapeze lady. \n.\n#tarot #tarotcards #occultart #justicetarot #tarotart #thehangedman #esotericart #watercolorcards #cardmaking#inkwell #blood #featherpen #trapeze #watercolorgirl #illustration #divination"
      },
      {
        "url": "https://www.instagram.com/p/CD43VmxHckE/",
        "thumbnailUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/117358105_721617528678113_7182519774575960435_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=pSTPOCaSKD0AX_x0qMB&edm=ABfd0MgAAAAA&ccb=7-4&oh=a3ef60fb02e41c268953ad120c75f3f5&oe=60911E38&_nc_sid=7bff83",
        "displayUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/117358105_721617528678113_7182519774575960435_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=pSTPOCaSKD0AX_x0qMB&edm=ABfd0MgAAAAA&ccb=7-4&oh=b465111297c7c39e5cecd547dde10fa1&oe=60938E94&_nc_sid=7bff83",
        "caption": "A bunch of Canadian everyday outdoorsy things - rainbowy Ammolite stone (ok maybe not so common), pinecone, inukshuk, goose feathers, elk antler, choke cherries, and an oak leaf not maple lol 🇨🇦 Watercolour of course!!\n.\n#fuckyeahferns #watercolor #illustration #canadianart #nature #watercolorflowers #thegreatoutdoors #feathers #antlers #ammolite #crystalart #inukshuk"
      },
      {
        "url": "https://www.instagram.com/p/CDxAgCwH9ve/",
        "thumbnailUrl": "https://instagram.fymy1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/117168792_114704180182708_8345139681841634356_n.jpg?tp=1&_nc_ht=instagram.fymy1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=JTA64-uo5MQAX85PJOE&edm=ABfd0MgAAAAA&ccb=7-4&oh=8150fa3f253a72912fd515871ddccb57&oe=609398E1&_nc_sid=7bff83",
        "displayUrl": "https://instagram.fymy1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/117168792_114704180182708_8345139681841634356_n.jpg?tp=1&_nc_ht=instagram.fymy1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=JTA64-uo5MQAX85PJOE&edm=ABfd0MgAAAAA&ccb=7-4&oh=35394bb93a07e390b1984eec2005802a&oe=60905C85&_nc_sid=7bff83",
        "caption": "Kali, the goddess of war and destruction\n.\n.\nShe destroys evil and carries away the spirits of slain warriors. Wearing a necklace of skulls. Do not make fun of the heart tattoo on her middle finger rumour has it she got so pissed she turned blue and drank the blood of the demon she was slashing before the blood could hit the ground and spout another demon... Hindu mythology is #metalasfuck .\n.\nThere are a lot of cool versions of stories about her - she’s both a real person and people’s manifestation of their anger and uh bloodthirst (there’s just no other way to describe it lol)\n.\n🎨 Watercolour and my cool new micron pens! \n.\n#kali #watercolor #sakurawatercolor #art #613art #watercolorillustration #neotraditional #neotradart #neotradpainting #traditionalart #painting #folklore #mythology #goddess #skullart #braids #peacockfeather #trishula #scimitar #india #warrior #warriorwoman #queenshit #nochill #easternmythology #metal"
      },
      {
        "url": "https://www.instagram.com/p/CDkNHx9HAmD/",
        "thumbnailUrl": "https://instagram.fymy1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/116249632_218846359458271_397023360086522078_n.jpg?tp=1&_nc_ht=instagram.fymy1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=ShktCvoQhSwAX9-g2_B&edm=ABfd0MgAAAAA&ccb=7-4&oh=753fbaae1c9bccde6c5d40266d004735&oe=6090A3CA&_nc_sid=7bff83",
        "displayUrl": "https://instagram.fymy1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/116249632_218846359458271_397023360086522078_n.jpg?tp=1&_nc_ht=instagram.fymy1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=ShktCvoQhSwAX9-g2_B&edm=ABfd0MgAAAAA&ccb=7-4&oh=0e06f6a31ba79f5f118633ff7b519ae7&oe=609135BF&_nc_sid=7bff83",
        "caption": "Nurturing. 🐇💀 I showed this to my brother he said “why”\n.\nWatercolour (acrylic for the sky)\n.\n#bunnyart #theyrefinechill #watercolor #watercolorpainting #acrylic #painting #bones #skull #skeletonart #creepy #cute #illustration #mushroomart #wildflowers #ferns #FUCKYEAHFERNS #ireallylikeferns"
      },
      {
        "url": "https://www.instagram.com/p/CM2Y8g2ldRZ/",
        "thumbnailUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.109.1440.1440a/s640x640/164333659_2839146169633383_2212378272161517351_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=82MYlR_EbkgAX_WmNyh&edm=ABfd0MgAAAAA&ccb=7-4&oh=ed1187cd1963a98cabed638ffd6eb968&oe=609056F9&_nc_sid=7bff83",
        "displayUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/164333659_2839146169633383_2212378272161517351_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=82MYlR_EbkgAX_WmNyh&edm=ABfd0MgAAAAA&ccb=7-4&oh=f3af3118e6d67bf9e4846aae780e8970&oe=6091F497&_nc_sid=7bff83",
        "caption": "Love drawing bitches n birds ☺️\n.\n.\n.\n.\n#blackandgrey #blackandgreyart #gray #blackandgreytattoo #raven #birdillustration #raventattoo #ravenillustration #ladyface #ladyfacetattoo #blackandwhite #witchyvibes"
      },
      {
        "url": "https://www.instagram.com/p/CMTlsmOHr51/",
        "thumbnailUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.179.1440.1440a/s640x640/158999436_1464505627666561_4528694561113112092_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=MA-cnsGvbi8AX8Bx062&edm=ABfd0MgAAAAA&ccb=7-4&oh=38c46f10b507e2ac2e2e841626b76979&oe=60908AE2&_nc_sid=7bff83",
        "displayUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/158999436_1464505627666561_4528694561113112092_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=MA-cnsGvbi8AX8Bx062&edm=ABfd0MgAAAAA&ccb=7-4&oh=86d67fbf6cd5fa27de417a10a0d1b134&oe=6092DB60&_nc_sid=7bff83",
        "caption": "🐱 this Jaguar kitty was a mountain lion for awhile til I got the courage to paint his spots!! Thanks 4 looking 🖤\n.\n.\n.\n.\n#jaguar #jaguartattoo #lion #cat #floraldesign #gouachepainting #watercolorpainting #traditionalart #monarchbutterfly #butterflytattoo #hibiscus #floraltattoo #botanicaldrawing #gardeninspiration"
      },
      {
        "url": "https://www.instagram.com/p/CFSOSyknkhx/",
        "thumbnailUrl": "https://instagram.fymy1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/119803644_696290637896947_7647320502735643652_n.jpg?tp=1&_nc_ht=instagram.fymy1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=4u8EhcHoYVMAX_5aVc-&edm=ABfd0MgAAAAA&ccb=7-4&oh=dfc7f6a9aad447f22cfc8e3c5dd5125f&oe=60938C87&_nc_sid=7bff83",
        "displayUrl": "https://instagram.fymy1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/119803644_696290637896947_7647320502735643652_n.jpg?tp=1&_nc_ht=instagram.fymy1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=4u8EhcHoYVMAX_5aVc-&edm=ABfd0MgAAAAA&ccb=7-4&oh=72f5b12e7b5d2b4547537266fd5731d6&oe=6092F063&_nc_sid=7bff83",
        "caption": "Man I Love (poison dart) Frogs 🐸 \n.\nand torch ginger flowers, Venus fly traps, and a frangipani horn worm.\n.\nEdges seem warpy on camera from basically waterboarding the paper but I promise it’s straight. Sakura watercolours on not-arches watercolour paper 🎨\n.\nBtw if any of y’all want prints of anything I made feel free to dm me 😊\n.\n#frog #poisondartfrog #watercolorpainting #frogpainting #watercolorfrog #watercolorart #monsteraplant #venusflytrap #torchgingerflower #ottawaartist #frangipanihornworm #pseudosphinx #pseudosphynxtetrio #SAVETHEFUCKINGRAINFOREST"
      },
      {
        "url": "https://www.instagram.com/p/CEffC6jnYOu/",
        "thumbnailUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/118473173_168858388144455_2608520919021027673_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=lvRMr0FpxQkAX-f3llP&edm=ABfd0MgAAAAA&ccb=7-4&oh=3baea5b8121d5b2df821da815da9be3f&oe=60930157&_nc_sid=7bff83",
        "displayUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/118473173_168858388144455_2608520919021027673_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=lvRMr0FpxQkAX-f3llP&edm=ABfd0MgAAAAA&ccb=7-4&oh=f9337b3a4274a77fa351b606d53ee3ac&oe=609115F3&_nc_sid=7bff83",
        "caption": "Just another pink flower painting🌸\n.\n.\n.\n#peonies #peonyart #neotrad #neotradflower #watercolorflowers #watercolorart #watercolorpeony #painting #floralart #natureart #flowerdesign"
      },
      {
        "url": "https://www.instagram.com/p/CEVDRYln8A2/",
        "thumbnailUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/118209340_190589335824954_9013680792813909824_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=NhvA0qs1MpQAX8HNNI0&edm=ABfd0MgAAAAA&ccb=7-4&oh=c27101a7961d183379bb90a44e8c56d1&oe=60912295&_nc_sid=7bff83",
        "displayUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/118209340_190589335824954_9013680792813909824_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=NhvA0qs1MpQAX8HNNI0&edm=ABfd0MgAAAAA&ccb=7-4&oh=24831b0f658c3d84b90a6712b6883bf8&oe=6091AF11&_nc_sid=7bff83",
        "caption": "I’m making my own tarot deck. This is how I see Justice and The Hanged (wo)Man ✨ the blood was supposed to be subtle oops guess the bastard deserved it. \n\nMight add some seaweed around water trapeze lady. \n.\n#tarot #tarotcards #occultart #justicetarot #tarotart #thehangedman #esotericart #watercolorcards #cardmaking#inkwell #blood #featherpen #trapeze #watercolorgirl #illustration #divination"
      },
      {
        "url": "https://www.instagram.com/p/CD43VmxHckE/",
        "thumbnailUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/117358105_721617528678113_7182519774575960435_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=pSTPOCaSKD0AX_x0qMB&edm=ABfd0MgAAAAA&ccb=7-4&oh=a3ef60fb02e41c268953ad120c75f3f5&oe=60911E38&_nc_sid=7bff83",
        "displayUrl": "https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/117358105_721617528678113_7182519774575960435_n.jpg?tp=1&_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=pSTPOCaSKD0AX_x0qMB&edm=ABfd0MgAAAAA&ccb=7-4&oh=b465111297c7c39e5cecd547dde10fa1&oe=60938E94&_nc_sid=7bff83",
        "caption": "A bunch of Canadian everyday outdoorsy things - rainbowy Ammolite stone (ok maybe not so common), pinecone, inukshuk, goose feathers, elk antler, choke cherries, and an oak leaf not maple lol 🇨🇦 Watercolour of course!!\n.\n#fuckyeahferns #watercolor #illustration #canadianart #nature #watercolorflowers #thegreatoutdoors #feathers #antlers #ammolite #crystalart #inukshuk"
      },
      {
        "url": "https://www.instagram.com/p/CDxAgCwH9ve/",
        "thumbnailUrl": "https://instagram.fymy1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/117168792_114704180182708_8345139681841634356_n.jpg?tp=1&_nc_ht=instagram.fymy1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=JTA64-uo5MQAX85PJOE&edm=ABfd0MgAAAAA&ccb=7-4&oh=8150fa3f253a72912fd515871ddccb57&oe=609398E1&_nc_sid=7bff83",
        "displayUrl": "https://instagram.fymy1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/117168792_114704180182708_8345139681841634356_n.jpg?tp=1&_nc_ht=instagram.fymy1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=JTA64-uo5MQAX85PJOE&edm=ABfd0MgAAAAA&ccb=7-4&oh=35394bb93a07e390b1984eec2005802a&oe=60905C85&_nc_sid=7bff83",
        "caption": "Kali, the goddess of war and destruction\n.\n.\nShe destroys evil and carries away the spirits of slain warriors. Wearing a necklace of skulls. Do not make fun of the heart tattoo on her middle finger rumour has it she got so pissed she turned blue and drank the blood of the demon she was slashing before the blood could hit the ground and spout another demon... Hindu mythology is #metalasfuck .\n.\nThere are a lot of cool versions of stories about her - she’s both a real person and people’s manifestation of their anger and uh bloodthirst (there’s just no other way to describe it lol)\n.\n🎨 Watercolour and my cool new micron pens! \n.\n#kali #watercolor #sakurawatercolor #art #613art #watercolorillustration #neotraditional #neotradart #neotradpainting #traditionalart #painting #folklore #mythology #goddess #skullart #braids #peacockfeather #trishula #scimitar #india #warrior #warriorwoman #queenshit #nochill #easternmythology #metal"
      },
      {
        "url": "https://www.instagram.com/p/CDkNHx9HAmD/",
        "thumbnailUrl": "https://instagram.fymy1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/116249632_218846359458271_397023360086522078_n.jpg?tp=1&_nc_ht=instagram.fymy1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=ShktCvoQhSwAX9-g2_B&edm=ABfd0MgAAAAA&ccb=7-4&oh=753fbaae1c9bccde6c5d40266d004735&oe=6090A3CA&_nc_sid=7bff83",
        "displayUrl": "https://instagram.fymy1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/116249632_218846359458271_397023360086522078_n.jpg?tp=1&_nc_ht=instagram.fymy1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=ShktCvoQhSwAX9-g2_B&edm=ABfd0MgAAAAA&ccb=7-4&oh=0e06f6a31ba79f5f118633ff7b519ae7&oe=609135BF&_nc_sid=7bff83",
        "caption": "Nurturing. 🐇💀 I showed this to my brother he said “why”\n.\nWatercolour (acrylic for the sky)\n.\n#bunnyart #theyrefinechill #watercolor #watercolorpainting #acrylic #painting #bones #skull #skeletonart #creepy #cute #illustration #mushroomart #wildflowers #ferns #FUCKYEAHFERNS #ireallylikeferns"
      }
    ]
  }

  console.log({ data })

  return {
    props: { posts: data.posts }, // will be passed to the page component as props
  }
}