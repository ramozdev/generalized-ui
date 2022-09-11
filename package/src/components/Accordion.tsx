import { FC, ReactNode } from 'react'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { v4 as uuidv4 } from 'uuid'
import { StyledComponent } from '@stitches/react/types/styled-component'
import Stitches from '@stitches/react/types/stitches'
import { CSS } from '@stitches/react/types/css-util'

export type AccordionStyles = {
    chevron: CSS
    content: CSS
    contentText: CSS
    header: CSS
    item: CSS
    root: CSS
    trigger: CSS
}

export function Accordion(stitches: Stitches, styles: AccordionStyles) {
    const { styled, config } = stitches
    type CSSProps = { css?: CSS<typeof config> }

    const Accordion = styled(AccordionPrimitive.Root, styles.root)
    type AccordionProps = (AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & CSSProps

    const AccordionItem = styled(AccordionPrimitive.Item, styles.item)
    type AccordionItemProps = AccordionPrimitive.AccordionItemProps & CSSProps

    const AccordionHeader = styled(AccordionPrimitive.Header, styles.header)
    type AccordionHeaderProps = AccordionPrimitive.AccordionHeaderProps & CSSProps

    const AccordionTrigger = styled(AccordionPrimitive.Trigger, styles.trigger)
    type AccordionTriggerProps = AccordionPrimitive.AccordionTriggerProps & CSSProps

    const AccordionContent = styled(AccordionPrimitive.Content, styles.content)
    type AccordionContentProps = AccordionPrimitive.AccordionContentProps & CSSProps

    const AccordionContentText = styled('div', styles.contentText)
    type AccordionContentTextProps = StyledComponent<'div'> & CSSProps

    const AccordionChevron = styled(ChevronDownIcon, styles.chevron)
    type AccordionChevronProps = StyledComponent<typeof ChevronDownIcon> & CSSProps

    type GeneralizedAccordionTriggerProps = {
        triggerProps?: AccordionTriggerProps
        chevronProps?: AccordionChevronProps
    } & AccordionHeaderProps
    const GeneralizedAccordionTrigger: FC<GeneralizedAccordionTriggerProps> = ({ children, triggerProps, chevronProps, ...props }) => (
        <AccordionHeader {...props}>
            <AccordionTrigger {...triggerProps}>
                {children}
                <AccordionChevron {...chevronProps} />
            </AccordionTrigger>
        </AccordionHeader>
    )

    type GeneralizedAccordionContentProps = {
        contentTextProps?: AccordionContentTextProps
    } & AccordionContentProps
    const GeneralizedAccordionContent: FC<GeneralizedAccordionContentProps> = ({ children, contentTextProps, ...props }) => (
        <AccordionContent {...props}>
            <AccordionContentText {...contentTextProps}>{children}</AccordionContentText>
        </AccordionContent>
    )

    type GeneralizedAccordionProps = {
        items: {
            itemProps: AccordionItemProps
            trigger: {
                props?: GeneralizedAccordionTriggerProps
                children: ReactNode
            }
            content: {
                props?: GeneralizedAccordionContentProps
                children: ReactNode
            }
        }[]
    } & AccordionProps

    const GeneralizedAccordion: FC<GeneralizedAccordionProps> = ({ items, ...props }) => {
        return (
            <Accordion {...props}>
                {items.map(({ content, trigger, itemProps }) => (
                    <AccordionItem key={uuidv4()} {...itemProps}>
                        <GeneralizedAccordionTrigger {...trigger.props}>{trigger.children}</GeneralizedAccordionTrigger>
                        <GeneralizedAccordionContent {...content.props}>{content.children}</GeneralizedAccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        )
    }

    return {
        Accordion,
        AccordionItem,
        AccordionHeader,
        AccordionTrigger,
        AccordionContent,
        AccordionContentText,
        AccordionChevron,
        GeneralizedAccordionTrigger,
        GeneralizedAccordionContent,
        GeneralizedAccordion
    }
}
