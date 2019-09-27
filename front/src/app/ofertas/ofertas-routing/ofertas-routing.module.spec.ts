import { OfertasRoutingModule } from '../ofertas-routing.module';

describe('OfertasRoutingModule', () => {
  let ofertasRoutingModule: OfertasRoutingModule;

  beforeEach(() => {
    ofertasRoutingModule = new OfertasRoutingModule();
  });

  it('should create an instance', () => {
    expect(ofertasRoutingModule).toBeTruthy();
  });
});
