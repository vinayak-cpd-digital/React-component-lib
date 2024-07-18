import { Meta, StoryObj } from '@storybook/react'
import Card from '../components/Card/Card'
import { Box } from '@mui/material' 
import landscape from './assets/Landscape.jpg'

type CardProps = {
    title: string;
    content: string;
    imageUrl?: string;
}

const meta: Meta<CardProps> = {
    title:"",
    component:Card,
    argTypes:{
        title:{
            table:{ disable: true}
        },
        content:{
            table:{ disable: true}
        },
        imageUrl:{
            table:{ disable: true}
        }
    },
    args:{
        title:"" ,
        content:"",
        imageUrl:""
    }
}

export const CarsStory: StoryObj<CardProps> = {
    render:(args: CardProps) => {
        return(
           <Box>
            <Card 
                title="Beautiful Landscape" 
                content="This is a beautiful landscape photo."
                imageUrl={landscape} 
            />
           </Box>
            
        )
    }
}

export default meta