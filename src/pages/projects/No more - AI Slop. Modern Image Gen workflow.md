---
layout: ../../components/MarkdownProject.astro
title: "No more - AI Slop. Modern Image Gen workflow"
pubDate: "May 2026"
techStack:
  - AI
  - Image Generation
  - ComfyUI
  - Stable Diffusion
project_for:
  label: Personal Project
  icon: ri-image-edit-line
summary: "A deep dive into treating AI image generation as a director rather than a prompter, utilizing ComfyUI and layer-based workflows."
---
<!-- 
# **No more \- AI Slop. Modern Image Gen workflow** -->

## **The Challenge**

The Internet has flooded with generic AI-generated art. Most users act as **Prompters**: they give vague instructions and let the AI decide how it looks. This lack of intent results in "AI Slop" — images that are technically impressive but creatively hollow, repetitive, and visually inconsistent. 

## **The solution: Be a "Director" with a plan.**

My Friend and I wanted to show that AI works best when you have a plan. We stopped being **Prompters** and became **Directors**. Instead of hoping for a lucky result, we entered the process with a clear vision and used tools to build exactly what we wanted.

---

## **Technical Setup: How to Direct the AI**

Imagine you generate a beautiful scene with a hero on the left and a villain on the right. If you decide the hero should be in the center, how do you do it?

1. Do you delete the whole thing and try again?   
2. Prompt AI with the image and ask it to edit?

Watch what happens when we tried the second way

**![][image1]**

Caption: A satirical meme illustrating the limitations of "prompt-based" AI image generation. At the top, a text prompt reads: "Rotate the character by 90 degrees and keep everything else consistent." Below it, the AI's "output" shows an anime girl character where the model has failed to understand spatial rotation. Instead of turning the character, it has fused two versions of her together—one standing upright and one oriented horizontally—resulting in a nonsensical, multi-limbed figure. To the right, a clapping hands emoji and the sarcastic text "THANKS AI AMAZING WORK\!" highlight the gap between a user's intent and the AI's literal, often flawed, interpretation.

Check out the third option: **Layers**

Layer based image editors such as photoshop and clip studio paint.

The basic idea is we generate parts of image and keep them on separate layers 

### ![][image2]

Caption: A diagram illustrating the concept of a multi-layer composition in an image editing workflow. On the left, a stack of individual asset layers is displayed obliquely, showing a background, foreground, and individual details (like the red sleeve and the specific character) as separate, transparent sheets. Lines indicate how these layers merge. On the right, the final composited output image is shown, where all the layers have been stacked and aligned to create the complete scene of the two characters. This demonstrates the granular control a creator has when treating AI-generated assets as separate components.

And the power of that is being able to make changes to a particular part. Whether it be delete , move or replace.

![][image3]

Caption:A screen recording of a Photoshop workspace demonstrating the practical advantage of a layer-based workflow. The GIF shows a user selecting an individual character asset within a manga panel and physically moving it across the canvas. Because the character is on its own isolated layer (visible in the organized "Layers" panel on the right), the background remains unaffected during the adjustment. This highlights how a "Director" can refine a composition, fix spacing, or reposition subjects without needing to re-generate the entire image.

Now comes how to actually generate these parts

# AI IMAGE GENERATION 

In terms of accessibility and convenience we have  Nano Banana and ChatGPT Images.   
But there is two big problems Price and customization

Generating a batch of 1,000 images on premium cloud architectures costs roughly **$130 USD (£96 GBP)** based on current tracking from [Artificial Analysis](https://artificialanalysis.ai/image/models?tti-models=openai-gpt_image-1-5%2Cnano-banana-2%2Cgemini_nano-banana-pro%2Cgpt-image-2&host-models=openai_image-1-5%2Cgoogle_imagen-4-ultra%2Cgoogle_nano-banana-pro%2Cxai_grok-imagine-image#api-price). For independent creators or small studios, this cost accumulates rapidly  
.   
![][image4]

## The Power-User Alternative: Local Open-Source Models

Running open-source models locally on your own hardware completely changes the math.

* **The Cons:** It requires a technical setup curve and solid hardware.  
* **The Pros:** It is incredibly cost-effective. Generating 1,000 images locally costs approximately **$0.10 USD (£0.095 GBP)** in electricity—making it nearly 1,000x cheaper. Furthermore, it offers limitless customizability.

What does this tech look like?  
![][image5]

**This IS ComfyUI** (a node-based pipeline).

Looks scary but gives you the granular control over the generation process

An example is teaching the model about our character  

Technical name: LoRa Tuning

## **Character Consistency via LoRA Tuning![][image6]**

Here’s more about customization.

In our case we were using a model which was based on SDXL Architecture.  
Now this model has different layers (this is not photoshop layers from before).

**UNet Layer:** Controls the spatial features (proportions, silhouette, and structure).  
**CLIP Layer:** Controls the stylistic features (texture, lighting, and "vibe").

Unlike ChatGPT Images 2.0 or Nanobanana here we can have full control . We can apply loras tuning to both layers and even choose the intensity and also stack loras\! 

But with power also comes consequences. It is easy to “break” things if you don't understand what is going on.

## Summary of Workflow Tools

| Element | Tool Used | Strategic Advantage |
| ----- | ----- | ----- |
| Panel Layout | Photoshop Shapes | Guaranteed perfect 2x4 grid alignment. |
| Storyboard | Photoshop Layers | Allowed "blocking out" of composition before generation. |
| Consistency | Custom Character LoRAs | Maintained facial features and clothing across panels. |
| Aesthetics | Illustrious XL | Fine-tuned model for high-end anime aesthetics. |
| Dialogue | Photoshop Text Tool | Avoided "gibberish" typical of raw AI outputs. |

## **The Result**

By treating AI as a tool rather than the artist, we made art that doesn't look like generic AI. The final images looked exactly like the ideas we had at the start.

### The Main Point: Vision is More Important than the Tool

**Key Takeaway:** Good AI art depends on knowing exactly what you want.

### We also learnt the layers solution to maintaining intent

The tradeoff between running models locally and using big providers 

# Appendix: Technical Specifications 

For those looking to recreate or benchmark this exact workflow pipeline, our environment settings included: 

* **Foundation:** Stable Diffusion XL (SDXL).  
* **Model:** Fine-tuned **Illustrious XL** checkpoint for superior base aesthetics.  
* **Interface:** **ComfyUI** (Node-based workflow for precise pipeline manipulation).  
* **Execution:** Custom **KSampler** configurations to balance noise-to-image fidelity.


[image1]: /projects/ai_slop/meme.png
[image2]: /projects/ai_slop/layer_composition.png
[image3]: /projects/ai_slop/layer_editing.gif
[image4]: /projects/ai_slop/api_price_comparison.png
[image5]: /projects/ai_slop/comfyui_workflow.png
[image6]: /projects/ai_slop/lora_tuning.png
