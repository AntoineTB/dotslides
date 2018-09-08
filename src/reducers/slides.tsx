import Actions      from "../model/actions"
import ReducerUtils from "../utils/ReducerUtils"
import Slide        from "../model/slide"
import DotSlide     from "../model/dotSlide"
import Engine       from "../model/engine"

interface addSlideActionStruct{
  slide : Slide
}

export const addSlide = (state:Slide[], action : addSlideActionStruct) => {
  return [...state, action.slide]
}

const initialDotSlides:DotSlide[] = [
  {
    engine    : Engine.circo,
    title     : "Demo 1",
    dotString : `graph A{label="1" a -- b -- {c d}}`,
    shown     : true,
  },
  {
    engine : Engine.dot,
    title     : "Services map",
    dotString : `
      // #fbbc04 # component
      // #4285f4 # user-facing service
      // orange external_service
      // #00cc00 # microservice
      // #00cc00 # main service

      digraph ServicesMap {
        graph [fontname = "helvetica"]
        node  [fontname = "helvetica"]
        edge  [fontname = "helvetica" fontsize=8]
        label="DealerBreacher Services Map (updated 2018-09-05)"
        ranksep = "2"
        rankdir=TB
        remincross=true
        newrank=true
        #splines=ortho
        subgraph actor {
          node [fillcolor=pink style=filled shape=diamond fontsize=16]
        }
        subgraph cluster_external {
          graph [color="#FFA50033" label="External Services" style=filled]
          node  [shape=box3d style=filled fillcolor="orange"]
          #edge  [color="#00000000"]
          subgraph cluster_external_google {
            graph [label="Google"]
            adwords         [label="Google Ads"]
            google_map      [label="Google Maps"]
            gtm             [label="Google Tag Manager"]
            analytics       [label="Google Analytics"]
            google_waze     [label="Waze API"]
          }
          trffk           [label="TRFFK"]
          sparkpost       [label="SparkPost"]
          loggly          [label="Loggly"]
          spaces          [label="DigitalOcean Spaces"]
          ubity           [label="Ubity"]
          callrail        [label="CallRail"]
          freshbook       [label="FreshBook"]
        }
        subgraph cluster_internal {
          label="Internal Services"
          graph[style=filled color="#0000ff11"]
          node [shape=box3d style=filled fillcolor="#00cc00"]
          subgraph cluster_snowstorm {
            graph[style="filled" color="lightgrey" label="Snowstorm Server"]
            snowstorm [label="Snowstorm"]
          }
          subgraph cluster_ventesflh {
            graph[style="filled" color="lightgrey" label="FLH Server"]
            ventesflh [label="Ventes FLH" shape=oval fillcolor="#4285f4"]
          }
          subgraph cluster_keystone {
            graph[style="filled" color="lightgrey" label="Keystone Server"]
            keystone_database    [label="Database" shape=folder fillcolor="#81a3ba"]
            keystone             [label="Keystone"]
          }
          subgraph cluster_main {
            graph [style="filled" color="lightgrey" label="Main Server"]
            crm               [label="CRM" shape=oval fillcolor="#4285f4"]
            crm_backend       [label="CRM Backend"]
            admin             [label="Admin" shape=oval fillcolor="#4285f4"]
            salesform         [label="SalesForm" shape=oval fillcolor="#4285f4"]
            main_email        [label="Email Server" shape=record fillcolor=grey]
            idb1              [label="IDB1" shape=oval fillcolor="#4285f4"]
            idb1_backend      [label="IDB1 Backend"]
            main_database     [label="Database" shape=folder fillcolor="#81a3ba"]
          }
          subgraph cluster_scraping {
            graph[style="filled" color="lightgrey" label="Scraping Server"]
            scraping                [label="Scraping"]
            webscraping             [label="WebScraping"]
            scraping_database       [label="Database" shape=folder fillcolor="#81a3ba"]
            trffk_scraping_endpoint [label="TRFFK\nEnpoint" shape=oval fillcolor="#4285f4"]
          }
          subgraph cluster_idb2 {
            graph[style="filled" color="lightgrey" label="IDB2 Server"]
            idb2         [label="IDB2" shape=oval fillcolor="#4285f4"]
            idb2_api     [label="IDB2 Backend"]
          }
          subgraph cluster_misc {
            graph[style="filled" color="lightgrey" label="Misc Server"]
            waze         [label="Waze"]
            shapes       [label="Shapes"]
          }
          subgraph cluster_auth {
            graph[style="filled" color="lightgrey" label="Auth Server"]
            auth         [label="Auth"]
          }
          subgraph cluster_tracking {
            graph[style="filled" color="lightgrey" label="Tracking Server"]
            tracking     [label="Tracking"]
          }
          subgraph cluster_popup {
            graph[style="filled" color="lightgrey" label="Popup Server"]
            popup        [label="Popup"]
          }
        }
        // Edges
        {
          {// cross-server database connexions
            edge[color=red]
            keystone->main_database->keystone
            keystone->scraping_database->keystone
            crm_backend->keystone_database->crm_backend
            scraping_database->admin
          }{// auth related
            auth -> { keystone tracking waze scraping shapes idb2 }
            trffk_scraping_endpoint -> auth
          }{//crm
            crm         -> salesform
            crm         -> crm_backend
            crm_backend -> crm
          }{// external services (for crm)
            google_map  -> crm
            google_map  -> crm_backend
            ubity       -> crm_backend
            crm_backend -> freshbook
            crm_backend -> main_email[color=red] # should use sparkpost
          }{// scraping related
            webscraping -> scraping
            scraping    -> trffk_scraping_endpoint
          }{// idb1/admin related
            idb1_backend -> keystone
            admin        -> main_email [color=red] # should be shutdown
            idb1_backend -> main_email [color=red] # should be shutdown
            idb1_backend -> idb1
            idb1         -> idb1_backend
          }{// idb2 related
            idb2     -> { tracking shapes waze } -> idb2
            idb2     -> keystone
            idb2     -> idb2_api
            idb2_api -> idb2
            keystone -> idb2
          }{// external services (excluding crm)
            google_waze -> waze
            { popup auth ventesflh } -> sparkpost
            gtm -> {tracking snowstorm }
            { callrail } -> tracking
            { scraping tracking shapes waze } -> { loggly spaces }
            scraping   -> trffk
            adwords    -> keystone
            keystone   -> adwords
            google_map -> { idb2 shapes }
          }
        }
        // Ranking
        {
          {// externals
            rank=same trffk sparkpost loggly spaces ubity callrail freshbook adwords google_map gtm analytics google_waze
          }{// back ends / services
            rank=same auth keystone scraping idb1_backend crm_backend webscraping idb2_api waze shapes tracking popup snowstorm
          }{// databases and misc
            rank=same main_database scraping_database keystone_database main_email
          }{// front ends
            rank=sink salesform ventesflh idb2 crm admin idb1 trffk_scraping_endpoint
          }
        }
      }
    `,
    shown     : true,
  },
  {
    engine : Engine.dot,
    title     : "Option 1",
    dotString : `graph A{label="3" a -- b -- { c d }}`,
    shown     : false,
  },
  {
    engine : Engine.dot,
    title     : "Option 2",
    dotString : `graph A{label="4" a -- { b c d }}`,
    shown     : true,
  },
  {
    engine : Engine.dot,
    title     : "Option 3",
    dotString : `graph A{label="5" {a b c d} -- {a b c d}}`,
    shown     : true,
  },
]
export const Slides = ReducerUtils.createReducer<Slide[]>(initialDotSlides,{
  [Actions.ADD_SLIDE] : addSlide
})
