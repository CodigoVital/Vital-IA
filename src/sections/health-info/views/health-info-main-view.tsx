import { CustomHeader } from "@/components/custom/custom-header";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import HealthCategoryFilter from "../components/health-category-filter";
import { categories } from "../config/categories.config";
import { ScrollArea } from "@/components/ui/scroll-area";

export const HealthInfoMainView = () => {
  return (
    <>
      <CustomHeader title="Promosión de información de salud" />
      <div className="p-5 w-full flex flex-col h-[calc(100vh-100px)]">
        <Input
          className={cn(
            "rounded placeholder:text-custom-placeholder",
            `bg-white border  border-custom-border `
          )}
          placeholder="Escribe tu búsqueda aquí"
        />
        <HealthCategoryFilter
          className="mt-4 bg-white flex flex-col h-19.5  border rounded-md border-custom-border"
          categories={categories}
        />
        <div className="mt-4 flex-1 min-h-0">
          <ScrollArea className="w-full h-full  ">
            <p>
              Contenido desplazable. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
              sapiente debitis quibusdam ut. Ipsum repellat illo sapiente.
              Expedita rerum explicabo voluptate corporis accusamus nam vero,
              culpa quas eos distinctio commodi? Eaque debitis animi doloribus
              perferendis nulla laboriosam et quos numquam blanditiis quibusdam
              eveniet nam eius esse corporis molestias quam magni sint suscipit
              ratione dolorum accusamus provident, saepe, vero modi. Nam.
              Veritatis dolorum labore odio reprehenderit minima esse cum
              aspernatur porro distinctio. Perspiciatis quod alias
              reprehenderit? Optio consectetur ducimus perferendis veritatis
              voluptatibus culpa cumque assumenda, maiores veniam molestiae
              placeat adipisci architecto? Veritatis doloremque error
              repudiandae officia commodi cum maiores quaerat fugit cupiditate
              tempora temporibus, earum, optio illum sit magni nihil saepe
              quidem libero ipsam atque! Dolorem reprehenderit aut commodi.
              Minima, rerum. Qui repudiandae ad, adipisci fugit, rerum laborum
              ipsam sunt similique, ea illo perferendis dolore illum. Quo hic
              possimus, maxime saepe odit unde aut corrupti corporis eveniet,
              perferendis ad nam facere? Delectus, repellendus sit. Dolorem,
              dolores impedit. Odio voluptatibus placeat saepe magni? Blanditiis
              officia vitae voluptas, saepe quia rerum veniam architecto
              consequatur, quibusdam, cupiditate sit distinctio. Debitis
              quibusdam illum similique tempora? Distinctio excepturi
              voluptates, nesciunt porro sed aut perferendis voluptatem
              temporibus deserunt, obcaecati nemo aperiam optio ad aliquid!
              Voluptas officia, doloremque vero et a dolorem velit quam error
              est assumenda praesentium! Quo praesentium animi rerum tempora
              sunt consequuntur, labore iusto numquam error, hic aperiam
              accusantium veritatis et excepturi dolor provident, libero
              ducimus. Quia, unde? Nam sequi dolor laborum dicta laboriosam
              maiores. Totam laboriosam sapiente accusantium aut repellat
              laudantium aliquid tempore mollitia, nihil aperiam illum
              provident! Odit minus eligendi reiciendis doloribus, facilis at
              distinctio quas beatae velit iste debitis harum laboriosam
              consequuntur. Ducimus nihil at repellat quibusdam dignissimos
              repudiandae consectetur perspiciatis aliquam voluptatibus, ipsa
              harum reiciendis corporis possimus quia fugiat nisi tempora
              dolores nostrum hic recusandae nemo praesentium error aspernatur?
              Hic, adipisci. Veniam vero sit maiores placeat laborum aperiam
              ducimus voluptas dolorem, temporibus voluptates ut enim
              dignissimos cum iure architecto libero vel et odio ipsa cumque
              voluptatibus molestias nesciunt labore! Delectus, harum. Quibusdam
              quae quod est sunt voluptate, consectetur numquam quo corporis
              porro debitis architecto similique minus perferendis culpa
              deleniti repudiandae blanditiis, maiores dolor doloribus
              praesentium deserunt alias quaerat inventore dolorem. Quia!
              Doloribus fugiat doloremque impedit nulla accusantium quisquam
              consequatur, earum et. Reprehenderit hic minima aliquam, magnam
              ullam cum blanditiis voluptatum eius incidunt nostrum, alias
              facere. Commodi quasi magni in maiores consequuntur? Perferendis
              error pariatur odit minus molestias ut delectus voluptatem id.
              Voluptas provident assumenda, commodi eaque quod accusantium
              pariatur dolore inventore. Optio natus harum perspiciatis animi
              maiores, officiis explicabo recusandae sit. Consectetur totam modi
              repellat beatae repellendus veritatis. Pariatur cum distinctio
              dolore voluptates minus. Rem molestias, delectus dolorum
              necessitatibus odit, temporibus quas ipsam, totam fuga earum sint
              eaque magni laudantium. Ad. Dolorum earum velit, exercitationem
              similique incidunt temporibus consectetur alias tempore distinctio
              neque, cumque qui enim consequatur eius, reprehenderit mollitia
              dolorem voluptatem nisi laudantium sit. Sint laudantium maiores
              error porro doloribus. Quae modi rem molestiae assumenda nam
              tempore numquam dolor voluptatibus, maxime eum nemo iusto
              cupiditate recusandae reprehenderit amet quas molestias corporis
              eos. Officiis natus optio fuga quidem. Magnam, modi voluptatum?
              Reiciendis quod distinctio doloribus numquam quisquam praesentium
              animi, nam possimus aliquid odio tenetur nostrum recusandae rerum,
              culpa ut omnis, quis amet est dolor veniam id! Nesciunt recusandae
              magni at esse. Corrupti vel ullam sequi alias, laborum doloremque,
              molestiae ex sint odio enim voluptate tempora esse dicta, deleniti
              rerum tempore ducimus perspiciatis! Minima similique odit delectus
              perspiciatis adipisci maxime accusamus consectetur. Exercitationem
              doloremque sapiente et corrupti quod reiciendis esse sint
              perferendis, explicabo maiores sequi laboriosam! Et nam odio
              facere cupiditate perspiciatis. Est vero dolorem aliquam? Dolore
              temporibus sequi esse sunt distinctio. Amet magni eligendi commodi
              repellendus sequi, aliquam veritatis quos tempore iusto provident
              error id aliquid ipsam vitae deserunt eos labore suscipit
              perferendis, dolorum pariatur quas. Esse reprehenderit et aut
              beatae. Consequatur modi incidunt quod eius delectus velit
              exercitationem vitae, earum obcaecati consequuntur libero
              distinctio. Error sed, ullam excepturi ratione quidem architecto
              quos, ipsa ea dolores autem obcaecati quas sequi sunt. Nostrum
              laborum, praesentium debitis quisquam consequatur delectus enim
              veniam rerum nemo in optio culpa corrupti fuga, qui necessitatibus
              dolore totam? Accusantium, neque. Itaque harum reiciendis expedita
              ullam ipsa neque similique? Corrupti nostrum repudiandae aliquid
              ipsam excepturi laudantium voluptatibus sapiente error quos neque
              incidunt, libero ut. Reprehenderit ullam quasi id assumenda alias
              itaque ab nulla praesentium, nemo odio at dicta dolorem?
              Perspiciatis tenetur rerum, accusantium facilis debitis mollitia
              nihil error ullam cumque laudantium recusandae, inventore illo
              officiis. Reiciendis laboriosam in voluptatum perferendis, quasi
              laborum aperiam recusandae debitis ab deserunt ullam corrupti?
              Voluptas voluptates laboriosam animi perspiciatis hic beatae
              doloribus quidem iure numquam quam, repudiandae eius quia
              asperiores doloremque repellendus recusandae fugiat esse cumque?
              Veritatis omnis labore ut nam iusto provident ad. Ex voluptatum
              facilis provident distinctio ut adipisci magni laudantium odio
              ipsum. Ab eum et incidunt, numquam animi deserunt aperiam! Labore
              veniam consequatur repellendus totam minima iusto odio deserunt
              est? Adipisci. Commodi voluptatibus ducimus tempora odio
              perspiciatis quo temporibus rerum assumenda dicta ut, ratione
              quidem consequatur modi aperiam magnam. Temporibus, quia? Delectus
              esse cupiditate ea dolor minima repudiandae! Commodi, sequi illum!
              Eos accusamus placeat dolorem rerum magnam, aut ut sint explicabo
              incidunt expedita consectetur consequuntur ullam laudantium ab
              dicta reprehenderit deserunt eligendi voluptatibus facilis sed.
              Debitis ipsa hic neque dolorum. Architecto. Voluptate iure
              delectus deserunt quo odio ut voluptas blanditiis perspiciatis ab
              obcaecati quibusdam eos harum quae, sunt porro id optio
              repudiandae soluta a illo quasi architecto totam rem. Quos,
              dignissimos.
            </p>
          </ScrollArea>
        </div>
      </div>
    </>
  );
};

export default HealthInfoMainView;
