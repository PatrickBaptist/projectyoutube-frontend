import axios from 'axios'
import moment from 'moment'
import VideoSearchCard from "../../videoSearchCards"
import { Container, ContainerCard } from "./styles"
import { UserContext } from "../../../contexts/userContext"
import { useSearchContext } from "./../../../contexts/searchContext";
import { useContext, useEffect, useState } from "react"

function SearchPage(){
    
    const { openMenu } = useContext(UserContext)

    interface Videos {
        id: {
            video: string
        }
        snippet: {
            title: string
            thumbnails: {
                high: {
                    url: string
                }
            }
            channelTitle: string
            publishedAt: string
            description: string
        }
    }

    const [videos, setVideosApi] = useState<Videos[]>([])
    const {search} = useSearchContext()

    useEffect(() => {
        if (search !== '') {
          load()
        }
      }, [search])

    const API_KEY = 'AIzaSyDQ3xAQIrM0HS4ix98k-8ZJ2z0jN5nHWAY'

    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&maxResults=48&&key=${API_KEY}`

    async function load() {
        if (search !== '') {
          try {
            const resposta = await axios.get(url)
            setVideosApi(resposta.data.items)
          } 
          catch(erro){
            console.log(erro)
          }
        }
      }

    function formatViewCount(viewCount: number): string {
    if(viewCount >= 1000000000) {
        return `${(viewCount / 1000000000)} bi de visualizações`
        } else if(viewCount >= 1000000) {
            return `${(viewCount / 1000000).toFixed(0)} mi de visualizações`
        } else if(viewCount >= 1000) {
            return `${(viewCount / 1000).toFixed(0)} mil visualizações`
        } else {
            return `${viewCount} visualizações`
        }
    }

    function getPublishedTime(publishedAt: string) {
        const now = moment()
        const publishedTime = moment(publishedAt)
        const diffDays = now.diff(publishedTime, 'days')

        if(diffDays <= 0) {
            return 'hoje'
        } else if(diffDays === 1) {
            return 'há 1 dia'
        } else if(diffDays === 1) {
            return 'há 1 dia'
        } else if(diffDays <= 7) {
            return `há ${diffDays} dias`
        } else if(diffDays <= 30) {
            const diffWeeks = Math.floor(diffDays / 7)
            if(diffWeeks === 1) {
                return 'há 1 semana'
            } else {
                return `há ${diffWeeks} semanas`
            }
        } else if (diffDays <= 365) {
            const diffMonths = Math.floor(diffDays / 30)
            if(diffMonths === 1) {
                return 'há 1 mês'
            } else {
                return `há ${diffMonths} meses`
            }
        } else {
            const diffYears = Math.floor(diffDays / 365)
            if (diffYears === 1) {
                return 'há 1 ano'
            } else {
                return `há ${diffYears} anos`
            }
        }
    }

    return(
    <Container>
        <ContainerCard $openmenu={openMenu}>
            {videos.map((video, index) => (
                <VideoSearchCard 
                title={video.snippet.title}
                thumbnail={video.snippet.thumbnails.high?.url}
                channelImage={video.snippet.channelTitle.charAt(0).toUpperCase()}
                channelName={video.snippet.channelTitle}
                details={`10 mi visualizações • ${getPublishedTime(video.snippet.publishedAt)}`}
                description={video.snippet.description}
                key={index}
                />
            ))}
        </ContainerCard>
    </Container>
   ) 
}

export default SearchPage