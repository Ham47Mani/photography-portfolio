import { tabItems } from "@/constants/constants"
import { Tab } from "@headlessui/react"
import { Photo } from "@/constants/types";
import Gallery from "./Gallery";

type TabsProps = {
  all: Photo[]
  people: Photo[]
  accommodation: Photo[]
  adventure: Photo[]
}

const Tabs = ({all, people, accommodation, adventure}: TabsProps) => {

  return (
    <div className="flex items-center flex-col min-h-[500px] pt-4 grow container">
      <Tab.Group>
        <Tab.List className={"flex items-center justify-center flex-wrap gap-2 md:gap-12 tabs"}>
          {
            tabItems.map(item => ( <Tab key={item.key}>{item.display}</Tab> ))
          }
        </Tab.List>
        <Tab.Panels className="mt-4">
          <Tab.Panel>
            <Gallery photos={all}/>
          </Tab.Panel>
          <Tab.Panel>
            <Gallery photos={people}/>
          </Tab.Panel>
          <Tab.Panel>
            <Gallery photos={accommodation}/>
          </Tab.Panel>
          <Tab.Panel>
            <Gallery photos={adventure}/>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default Tabs