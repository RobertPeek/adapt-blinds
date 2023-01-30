import Adapt from 'core/js/adapt';
import BlindsModel from './blindsModel';
import BlindsView from './blindsView';

export default Adapt.register('blinds', {
    model: BlindsModel,
    view: BlindsView
});