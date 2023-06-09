import { Image, RichText, Text, types } from 'react-bricks/frontend'
import 'atropos/css'
import Atropos from 'atropos/react';
//=============================
// Local Types
//=============================
type Padding = 'big' | 'small'

interface HeroUnitProps {
    padding: Padding
    title: string
    text: string
}

//=============================
// Component to be rendered
//=============================
const AnimatedHeroUnit: types.Brick<HeroUnitProps> = ({ padding }) => {
    return (
        <div
            className={`bg-blue-400 max-w-xl mx-auto px-6  ${padding === 'big' ? 'py-20' : 'py-12'
                }`}
        >
            <div>
                <Atropos
                    activeOffset={40}
                    shadowScale={1.05}
                    onEnter={() => console.log('Enter')}
                    onLeave={() => console.log('Leave')}
                    onRotate={(x, y) => console.log('Rotate', x, y)}
                    rotateTouch
                    shadow={false}
                >
                    <Image
                        propName="icon"
                        alt="Icon"
                        maxWidth={300}
                        aspectRatio={1}
                        imageClassName="w-80 mb-5 mx-auto"
                    />
                </Atropos>
                <Text
                    renderBlock={(props) => (
                        <h1 className="mb-3 text-3xl font-black leading-tight text-center text-gray-900 sm:text-4xl dark:text-white">
                            {props.children}
                        </h1>
                    )}
                    renderPlaceholder={(props) => (
                        <span className="opacity-30">{props.children}</span>
                    )}
                    placeholder="Type a title..."
                    propName="title"
                />
                <RichText
                    renderBlock={(props) => (
                        <p className="text-xl leading-relaxed text-center text-gray-700 dark:text-gray-100">
                            {props.children}
                        </p>
                    )}
                    placeholder="Type a text..."
                    propName="text"
                    allowedFeatures={[
                        types.RichTextFeatures.Bold,
                        types.RichTextFeatures.Italic,
                        types.RichTextFeatures.Highlight,
                        types.RichTextFeatures.Code,
                        types.RichTextFeatures.Link,
                    ]}
                    renderCode={(props) => (
                        <code className="px-2 py-1 text-sm bg-gray-200 rounded dark:bg-gray-700">
                            {props.children}
                        </code>
                    )}
                />
            </div>
        </div>
    )
}

//=============================
// Brick Schema
//=============================
AnimatedHeroUnit.schema = {
    name: 'my-animated-hero-unit',
    label: 'Animated Hero Unit',
    previewImageUrl: `/bricks-preview-images/custom-hero-unit.png`,
    getDefaultProps: () => ({
        padding: 'big',
        title: 'This is a custom Hero Unit',
        text: "We are a hi-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations.",
    }),
    sideEditProps: [
        {
            name: 'padding',
            label: 'Padding',
            type: types.SideEditPropType.Select,
            selectOptions: {
                display: types.OptionsDisplay.Select,
                options: [
                    { value: 'big', label: 'Big Padding' },
                    { value: 'small', label: 'Small Padding' },
                ],
            },
        },
    ],
}

export default AnimatedHeroUnit
