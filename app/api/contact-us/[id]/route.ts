import { prisma } from "@/app/lib/prisma";
import { requireAdmin, AuthError } from "@/app/lib/auth";
import { NextRequest, NextResponse } from "next/server";

type Routercontext =  {
    params : Promise<{
        id : string
    }>
}

export async function GET(request:NextRequest,context:Routercontext) {
    try {
        await requireAdmin(request);

        const {id} = await context.params;

        if(!id){
            return NextResponse.json({
                message:"id is required",
            },{status:400})
        }

        const contactMessage = await prisma.contactUs.findUnique({
            where:{
                id,
            }
        })

        if(!contactMessage){
            return NextResponse.json({
                message:"contact message not found"
            },{status:404})
        }

        return NextResponse.json({
            data:contactMessage,
        },{status:200})

    } catch (error) {
        if(error instanceof AuthError){
            return NextResponse.json({
                message:error.message,
            },{status:error.status})
        }

        console.log("error while fetching contact message : ",error);
        return NextResponse.json({
            message:"error while fetching contact message",
        },{status:500})
    }
}

export async function DELETE(request:NextRequest,context:Routercontext){
    try {

        await requireAdmin(request);
        const {id} = await context.params;

        if(!id){
            return NextResponse.json({
                message:"id is required"
            },{status:400})
        }

        const existingMessage = await prisma.contactUs.findUnique({
            where:{
                id,
            }
        })

        if(!existingMessage){
            return NextResponse.json({
                message:"contact message not found"
            },{status:404})
        }

        await prisma.contactUs.delete({
            where:{
                id,
            }
        })

        return NextResponse.json({
            message:"contact message deleted successfully",
        },{status:200})
        
    } catch (error) {
        if(error instanceof AuthError){
            return NextResponse.json({
                message:error.message,
            },{status:error.status})
        }

        console.log("error while deleting message : ",error);
        return NextResponse.json({
            message:"error while deleting message",
        },{status:500})
    }
}