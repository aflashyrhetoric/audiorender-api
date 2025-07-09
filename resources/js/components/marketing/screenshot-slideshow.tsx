import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export function ScreenshotSlideshow() {
    return (
        <Carousel className="max-w w-full">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <Card className={`border-0 bg-transparent`}>
                            <CardContent className="fc">
                                <img alt={`A screenshot showing step ${index + 1} of using AudioRender`} src={`/img/step-${index + 1}.png`} />
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className={`text-black hover:bg-neutral-200`} />
            <CarouselNext className={`text-black hover:bg-neutral-200`} />
        </Carousel>
    );
}
